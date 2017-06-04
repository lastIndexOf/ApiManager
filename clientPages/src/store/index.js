import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import router from '../router/index'

export default new Vuex.Store({
  // modules: {},
  state: {
    isBlur: false
  },
  mutations: {
    back(state) {
      router.back()
    },
    cancelBlur(state) {
      setTimeout(() => {
        state.isBlur = false
      }, 400)
    },
    beBlur(state) {
      state.isBlur = true
    }
  }
})