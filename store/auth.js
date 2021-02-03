// stre/auth.js

// reusable aliases for mutations
export const AUTH_MUTATIONS = {
  SET_USER: 'SET_USER',
  SET_PAYLOAD: 'SET_PAYLOAD',
  LOGOUT: 'LOGOUT',
}

// state
export const state = () => ({
  access_token: null, // JWT access token
  refresh_token: null, // JWT refresh token
  id: null, // user id
  email_address: null, // user email address
  expiresin: null // expire time token
})

// mutations
export const mutations = {
  // store the logged in user in the state
  [AUTH_MUTATIONS.SET_USER] (state, { id, email_address }) {
    state.id = id
    state.email_address = email_address
  },

  // store new or updated token fields in the state
  [AUTH_MUTATIONS.SET_PAYLOAD] (state, { access_token, expires_in, refresh_token = null }) {
    state.access_token = access_token
    state.expiresin = expires_in
    // refresh token is optional, only set it if present
    if (refresh_token) {
      state.refresh_token = refresh_token
    }
  },

  // clear our the state, essentially logging out the user
  [AUTH_MUTATIONS.LOGOUT] (state) {
    state.id = null
    state.email_address = null
    state.access_token = null
    state.refresh_token = null
    state.expires_in = null
  },
}

// actions
export const actions = {
  async login ({ commit }, { email, password }) {
    // make an API call to login the user with an email address and password
    const { data: { user, payload } } = await this.$axios.post(
      '/api/v1/login', 
      { email, password }
    )
    this.$toast.info('Logging in...')
    this.$router.push('/')
    // commit the user and tokens to the state
    commit(AUTH_MUTATIONS.SET_USER, user)
    commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
  },

  async register ({ commit }, { email_address, password }) {
    // make an API call to register the user
    const { data: { user, payload } } = await this.$axios.post(
      '/api/v1/register', 
      { email_address, password }
    )
    
    // commit the user and tokens to the state
    commit(AUTH_MUTATIONS.SET_USER, user)
    commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
  },

  // given the current refresh token, refresh the user's access token to prevent expiry
  async refresh ({ commit, state }) {
    const { refresh_token } = state.refresh_token
    console.log('refresh token store auth', state.refresh_token)
    // make an API call using the refresh token to generate a new access token
    const { data: { payload } } = await this.$axios.post(
      '/api/v1/refresh', 
      { refresh_token }
    )
    commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
  },

  // logout the user
  async logout ({ commit }) {
    await this.$axios.get('/api/v1/logout')

    commit(AUTH_MUTATIONS.LOGOUT)
  },
}

// getters
export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  isAuthenticated: (state) => {
    return state.access_token && state.access_token !== ''
  },
}