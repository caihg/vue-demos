import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: {
      id: ''
    },
    x: {
      what: 'nothing'
    }
  }
})
