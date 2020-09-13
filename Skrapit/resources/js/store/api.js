import {authHeader} from "../helpers/header";

const state = {

}

const mutations = {

}

const getters = {

}

const actions = {
    createApi ({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/intel/create', data)
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
        console.log(data)
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
            axios.post(uri, authHeader())
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
