import router from '../router/router'

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
    login ({ commit }, user) {
        return new Promise((resolve, reject) => {
        axios.post('/api/auth/login', user)
            .then(resp => {
                const token = resp.data.access_token
                commit('login')
                commit('SET_TOKEN', token)
                router.push({name: 'Dashboard'})
                resolve(resp)
            })
            .catch(err => {
                localStorage.removeItem('token')
                reject(err.response.data.error)
            })
        })
    },

    logout ({ commit }) {
        commit('logout')
        commit('CLEAR_TOKEN')

        router.push({name: 'Login'})
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
