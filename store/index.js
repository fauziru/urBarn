// store/index.js

import { createLogger } from 'vuex'

export const plugins = [createLogger()]

// state
export const state = () => ({
  isMobile: false,
  layout: {
    topNavbar: {
      hasBack: false,
      hasTitle: ''
    },
    bottomBar: true,
    footer: true
  }
})

// actions
export const actions = {
  // https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
  // automatically refresh the access token on the initial request to the server, if possible
  async nuxtServerInit ({ dispatch, state, commit }) {
    const { access_token, refresh_token, id, email_address, expire_in } = state.auth
    console.log('storage index', access_token, refresh_token)
    commit('auth/SET_USER', {id, email_address})
    commit('auth/SET_PAYLOAD', {access_token, refresh_token, expire_in })
    if (access_token && refresh_token) {
      try {
        // refresh the access token
        await dispatch('auth/refresh')
      } catch (e) {
        // catch any errors and automatically logout the user
        await dispatch('auth/logout')
      }
    }
  },

  async renderLayout ({commit}, data) {
    commit('setLayout', data)
  }
}

// mutations
export const mutations = {
  setisMobile (state, bool) {
    state.isMobile = bool
  },
  setLayout (state, payload) {
    state.layout = payload
  }
}
