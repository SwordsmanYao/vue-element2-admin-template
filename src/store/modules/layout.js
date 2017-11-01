import * as types from '../mutation-types'

const state = {
  opened: true
}

const getters = {
  opened: state => state.opened
}

const actions = {
  switchCollapseSidbar ({commit}) {
    commit(types.SWITCH_COLLAPSE_SIDEBAR)
  }
}

const mutations = {
  [types.SWITCH_COLLAPSE_SIDEBAR] (state) {
    state.opened = !state.opened
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
