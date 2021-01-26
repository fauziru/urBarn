import { createLogger } from 'vuex'

export const plugins = [createLogger()]

// state
export const state = () => ({
  isMobile: false,
  hasBack: false
})

// actions
export const actions = {
  renderTopNav ({commit}, data) {
    commit(sethasBack, data.hasBack)
  }
}

// mutations
export const mutations = {
  setisMobile (state, bool) {
    state.isMobile = bool
  },
  sethasBack (state, bool) {
    state.hasBack = bool
  }
}
