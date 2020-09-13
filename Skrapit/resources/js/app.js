require('./bootstrap')

import Vue from 'vue'
import router from './router/router'
import store from './store/store'

import Toast from "vue-toastification"

import MainApp from "./views/MainApp"

window.Vue = require('vue')

const options = {

};

Vue.use(Toast, options);

const app = new Vue({
    el: '#app',
    components: { MainApp },
    router,
    store
});
