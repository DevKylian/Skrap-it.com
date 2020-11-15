import router from '../router/router'
import {authHeader} from "../helpers/header";

const state = {
    logged: !!localStorage.getItem('token'),
}

const mutations = {
    login (state) {
        state.logged = true
    },

    logout (state) {
        state.logged = false
    }
}

const getters = {
    isLogged: state => state.logged
}

const actions = {
    login ({ commit }, data) {
        let uri = '/api/auth/login'

        return new Promise((resolve, reject) => {
        axios.post(uri, data)
            .then(res => {
                const token = res.data.access_token
                commit('login')
                commit('SET_TOKEN', token)
                router.push({name: 'Dashboard'})
                resolve(res)
            })
            .catch(err => {
                localStorage.removeItem('token')
                reject(err.response.data.errors)
            })
        })
    },

    register ({ commit }, data) {
        let uri = '/api/auth/register'

        return new Promise((resolve, reject) => {
        axios.post(uri, data)
            .then(res => {
                router.push({name: 'Login'})
                resolve(res)
            })
            .catch()
        })
    },

    logout ({ commit }) {
        let uri = '/api/auth/logout'

        return new Promise((resolve, reject) => {
            axios.post(uri)
                .then(res => {
                    commit('logout')
                    commit('CLEAR_TOKEN')
                    router.push({name: 'Login'})
                    resolve(res)
                })
                .catch(err => {
                    localStorage.removeItem('token')
                    router.push({name: 'Login'})
                    reject(err.response.data.message)
                })
        })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
