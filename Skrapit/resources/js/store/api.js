const state = {
    apiAllName: [],
}

const mutations = {
    SET_API_ALL_NAME: (state, apis) => {
        state.apiAllName = apis
    },
}

const getters = {
    getApiAllName(state) {
        return state.apiAllName;
    },
}

const actions = {
    allApiName ({ commit }, data) {
        let uri = `/api/intel/all-name/${data}`

        return new Promise((resolve, reject) => {
            axios.get(uri)
                .then(res => {
                    commit('SET_API_ALL_NAME', res.data)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    createApi ({ commit }, data) {
        let uri = '/api/intel/create'

        return new Promise((resolve, reject) => {
            axios.post(uri, data)
                .then(res => {
                    this.dispatch('setUsers')
                    resolve(res)
                })
                .catch(err => {
                    reject(err.response.data.errors)
                })
        })
    },
    editApi ({ commit }, data) {
        const uri = `/api/intel/edit/${data.id}`
        return new Promise((resolve, reject) => {
            axios.post(uri, data)
                .then(res => {
                    this.dispatch('setUsers')
                    resolve(res)
                })
                .catch(err => {
                    reject(err.response.data.errors)
                })
        })
    },
    deleteApi ({ commit }, id) {
        const uri = `/api/intel/delete/${id}`
        return new Promise((resolve, reject) => {
            axios.post(uri)
                .then(res => {
                    this.dispatch('setUsers')
                    resolve(res)
                })
                .catch(err => {
                    reject(err.response.data.errors)
                })
        })
    },
    toggleApi ({ commit }, id) {
        const uri = `/api/intel/toggle/${id}`
        return new Promise((resolve, reject) => {
            axios.post(uri)
                .then(res => {
                    this.dispatch('setUsers')
                    resolve(res)
                })
                .catch(err => {
                    reject(err.response.data.errors)
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
