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

axios.interceptors.response.use(response => {
    const token = localStorage.getItem('token');

    if(!token && store.getters.isLogged) store.commit('logout')

    return response;
}, error => {
    let path = '/login';

    switch (error.response.status) {
        case 401: return;
        case 403: path = '/login'; break;
        default : return Promise.reject(error);
    }

    router.push(path);

    return Promise.reject(error);
});

const app = new Vue({
    el: '#app',
    components: { MainApp },
    router,
    store
});
