const state = {

}

const mutations = {

}

const getters = {

}

const actions = {

    subscribePackage ({ commit }, data) {
        let uri = '/api/auth/subscribe-package'

        return new Promise((resolve, reject) => {
            axios.post(uri, data)
                .then(res => resolve(res))
                .catch(err => reject(err.response.data.errors))
        })
    },
}

export default {
    state,
    mutations,
    getters,
    actions
}
