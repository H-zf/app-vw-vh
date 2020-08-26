import Vue from 'vue'
import Vuex from 'vuex'
import DetailModules from './modules/details.js'
import HomeModules from './modules/home.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    modules: {
        DetailModules,
        HomeModules
    }
})