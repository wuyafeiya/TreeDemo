import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    label: '',
    TreeName: ''
  },
  getters: {},
  mutations: {
    ChangeLabel(state, NewValue) {
      state.label = NewValue
    },
    ChangeTreeName(state, NewValue) {
      state.TreeName = NewValue
    }
  },
  actions: {},
  modules: {}
})
