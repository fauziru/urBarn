import { createLogger } from 'vuex'

export const plugins = [createLogger()]

// state
export const state = () => ({
  isMobile: false,
  topNavbar: {
    hasBack: false,
    hasTitle: ''
  }
})

// actions
export const actions = {
  async renderTopNav ({commit}, data) {
    commit('setTopNavbar', data)
  }
}

// mutations
export const mutations = {
  setisMobile (state, bool) {
    state.isMobile = bool
  },
  setTopNavbar (state, payload) {
    state.topNavbar = payload
  }
}
