import Vuex from 'vuex'
import 'es6-promise/auto'

import test from './test'

export default () => new Vuex.Store({
  modules: {
    test
  }
})