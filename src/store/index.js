import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    label: ''
  },
  getters: {},
  mutations: {
    ChangeLabel(state, NewValue) {
      state.label = NewValue
    }
  },
  actions: {},
  modules: {}
})
