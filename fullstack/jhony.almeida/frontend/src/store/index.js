import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: ""
  },
  mutations: {
    changeSearchTerm(state, newSearchTerm) {
      state.searchTerm = newSearchTerm
    }
  },
  actions: {
    changeSearchTerm({ commit }, newSearchTerm) {
      commit("changeSearchTerm", newSearchTerm)
    }
  },
  modules: {
  }
})
