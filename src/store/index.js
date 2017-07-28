import Vue from 'vue'
import Vuex from 'vuex'

import marklist from './modules/marklist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    marklist
  }
})
