import {authHeader} from "../helpers/header";
import store from "./store";

const state = {
    token: localStorage.getItem('token') || '',
    users: [],
    isAdmin: false,
    loading: null,
}

const mutations = {
    SET_USER: (state, users) => {
        state.users = users
    },
    SET_TOKEN(state, token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
        state.token = token;
    },
    CLEAR_TOKEN: (state) => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']
        state.token = "";
    },
    SET_IS_ADMIN: (state, rank) => {
        state.isAdmin = !!(rank);
    },
    SET_LOADING: (state, payload) => {
        state.loading = payload;
    },
}

const getters = {
    getUsers(state) {
        return state.users;
    },
    getRemainingUses(state) {
        let r = 0;
        for (let i = 0; i < state.users.apis.length; i++)
            if(state.users.apis[i].package_id === state.users.package_id)
                r += state.users.apis[i].max_uses
        return state.users.package.max_uses - r;
    },
    getApiUsage(state) {
        let r = 0;
        for (let i = 0; i < state.users.apis.length; i++)
            if(state.users.apis[i].package_id === state.users.package_id)
                r += (state.users.apis[i].max_uses - state.users.apis[i].remaining_uses)
        return r;
    },
    getCountApis(state) {
        let r = 0;
        for (let i = 0; i < state.users.apis.length; i++)
            if(state.users.apis[i].package_id === state.users.package_id) r++
        return r;
    },
    getToken(state) {
        return state.token;
    },
    getIsAdmin(state) {
        return state.isAdmin;
    },
    getLoading(state) {
        return state.loading;
    }
}

const actions = {
    setUsers(context) {
        let uri = '/api/auth/me'

        axios.post(uri, authHeader())
            .then(res => {
                context.commit('SET_USER', res.data)
                context.commit('SET_IS_ADMIN', res.data.isAdmin)
                store.commit('SET_LOADING', false);
            })
            .catch(err => {
                console.log(err.response)
            });
    },
    checkToken() {
        let uri = '/api/auth/checkToken'

        axios.post(uri, authHeader())
            .then(res => {
                !res.data.success ? store.commit('SET_TOKEN', res.data.token) : null
                store.dispatch('setUsers');
            })
            .catch(err => {
                console.log(err)
                store.dispatch('logout')
            })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
