import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import user from './user'
import api from './api'
import packages from './package'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        user,
        api,
        packages
    }
})
