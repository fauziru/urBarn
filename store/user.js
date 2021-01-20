// state
export const state = () => ({
  token: '',
  username: ''
})

// actions
export const actions = {
  storeLogin ({commit}) {
    commit('setToken', 'tesToken')
    commit('setUser', 'tesUser')
  }
}

// mutations
export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUser (state, user) {
    state.username = user
  }
}
