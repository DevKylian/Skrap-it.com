<template>
    <div>
        <div class="page-title dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page-title-content">
                            <p>Your API's</p>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <div>
                                <a href="#" class="sbtn sbtn-dark" @click="createApiModal">
                                    <i class="fad fa-plus-circle"></i>
                                    <span class="mobile-none ml-3">Create API</span>
                                    <span v-if="!getLoading">
                                        ({{ getUser.apis.length }}/{{ getUser.package.max_api }})
                                    </span>
                                </a>
                            </div>
                            <div class="align-self-center justify-content-end">
                                <button v-if="!isReloading" class="sbtn sbtn-dark" @click="refreshData">
                                    <i class="fad fa-sync-alt"></i>
                                    <span class="mobile-none ml-3">Refresh data</span>
                                </button>
                                <button v-if="isReloading" :disabled="true" class="sbtn sbtn-dark">
                                    <i class="fad fa-sync-alt fa-spin"></i>
                                    <span class="mobile-none ml-3">Please wait ...</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 col-lg-6" v-for="(api) in getUser.apis">
                        <div class="card">
                            <div class="card-body" v-if="getLoading">
                                <ApisLoader></ApisLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="dropdown float-right profile_log">
                                    <div class="profile_log" data-toggle="dropdown" aria-expanded="false">
                                        <a href="#" class="dropdown-toggle arrow-none card-drop marge-points">
                                            <i class="far fa-ellipsis-v float-right"></i>
                                        </a>
                                    </div>
                                    <ul class="dropdown-menu dropdown-menu-right dropdown-shadow">
                                        <li class="dropdown-item" @click="deleteApiModal(api.id)">
                                            <i class="fad fa-trash-alt mr-3 sred"></i>Delete
                                        </li>
                                        <li class="dropdown-item" @click="toggleApi(api.id)" v-if="api.status !== 1">
                                            <i class="fad fa-toggle-on mr-3 sgreen"></i>Enable
                                        </li>
                                        <li class="dropdown-item" @click="toggleApi(api.id)" v-if="api.status === 1">
                                            <i class="fad fa-toggle-off mr-3 sorange"></i>Disable
                                        </li>
                                    </ul>
                                </div>
                                <p class="sdark text-uppercase font-weight-bold font-size-12">
                                    # <span class="sdark">
                                        {{ api.title }}
                                    </span>
                                </p>
                                <div class="d-flex justify-content-between">
                                    <div class="row">
                                        <div class="col-sm-auto">
                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    <a href="#" class="text-muted d-inline-block"
                                                       tooltip="Remaining uses"
                                                       flow="up">
                                                        <i class="fad fa-bullseye-pointer mr-2"></i>
                                                        {{ api.remaining_uses }} / {{ api.max_uses }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <div class="col-sm-auto">
                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    <div v-if="api.status === 1">
                                                        <span class="sgreen mobile-none">Online</span>
                                                        <span class="dot pulse sbg-green"></span>
                                                    </div>
                                                    <div v-if="api.status !== 1" class="sorange">
                                                        <span class="sorange mobile-none">Offline</span>
                                                        <span class="dot sbg-orange"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-show="isGenerateApiModalVisible" @close="createApiModal" v-if="!getLoading">
            <span slot="title">Generate API</span>
            <form @submit.prevent="createApi" method="POST" slot="body">
                <div class="form-group">
                    <label class="form-control-label">API Name</label>
                    <div class="input-group input-group-merge">
                        <input type="text" class="form-control" id="api_title"
                               :class="{ 'is-invalid' : errors.title }"
                               placeholder="hello@skrap-it.com" v-model="form.title">
                    </div>
                    <span class="sred" v-if="errors.title"> {{ errors.title[0] }}</span>
                </div>
                <div class="form-group">
                    <label for="apiUsage">Max usage :
                        <span class="font-weight-bold sred">
                            {{ form.max_uses }} / {{ getRemainingUses }}
                        </span>
                    </label>
                    <input type="range" :min="0" :max="getRemainingUses" class="custom-range" id="apiUsage"
                           v-model="form.max_uses">
                    <span class="sred" v-if="errors.max_uses"> {{ errors.max_uses[0] }}</span>
                </div>
                <div class="form-row mt-3">
                    <div class="form-group col-12">
                        <button type="submit" class="sbtn sbtn-red btn-block">
                            <i class="fad fa-plus-circle mr-3"></i>
                            Generate
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
        <Modal v-show="isDeleteApiModalVisible" @close="deleteApiModal" v-if="!getLoading">
            <span slot="title">Are you sure ?</span>
            <div class="form-row" slot="body">
                <div class="form-group col-6">
                    <div type="button" class="sbtn sbtn-red btn-block" @click="deleteApi(selectedId)">
                        <i class="fad fa-trash-alt mr-3"></i>
                        Confirm
                    </div>
                </div>
                <div class="form-group col-6">
                    <div type="button" class="sbtn sbtn-dark btn-block" @click="deleteApiModal">
                        <i class="fad fa-ban fa-swap-opacity mr-3"></i>
                        Cancel
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {authHeader} from "../../helpers/header";
import ApisLoader from "../../components/Loader/ApisLoader";
import Modal from "../../components/Modal";

export default {
    components: {
        Modal,
        ApisLoader,
    },
    computed: {
        ...mapGetters({
            getUser: 'getUsers',
            getLoading: 'getLoading',
            getRemainingUses: 'getRemainingUses',
        }),
    },
    data() {
        return {
            isGenerateApiModalVisible: false,
            isDeleteApiModalVisible: false,
            isReloading: false,
            form: {
                max_uses: '',
                title: ''
            },
            errors: {},
            selectedId: '',
        };
    },
    methods: {
        createApiModal() {
            if (this.getUser.package.max_api > this.getUser.apis.length && this.getRemainingUses > 0) {
                this.isGenerateApiModalVisible = !this.isGenerateApiModalVisible;
                this.cleanModalApi();
            } else {
                this.$toast.error("You have exceeded the limits of your offer.")
            }
        },
        deleteApiModal(id) {
            this.selectedId = id;
            this.isDeleteApiModalVisible = !this.isDeleteApiModalVisible;
            this.cleanModalApi();
        },
        createApi() {
            this.$store.dispatch('createApi', this.form)
                .then((res) => {
                    this.$toast.success(res.data.success)
                    this.createApiModal()
                })
                .catch(err => this.errors = err)
        },
        deleteApi(id) {
            this.$store.dispatch('deleteApi', id)
                .then((res) => {
                    this.$toast.success(res.data.success)
                    this.deleteApiModal(id)
                })
                .catch(err => this.$toast.error(err))
        },
        cleanModalApi() {
            this.form = {}
            this.errors = {}
        },
        refreshData() {
            this.$store.commit('SET_LOADING', true)
            this.$store.dispatch('setUsers')
            this.disableButton()
        },
        disableButton() {
            this.isReloading = true;
            setTimeout(() => {
                this.isReloading = false;
            }, 5000);
        },
        copyKey(key) {
            const ke = document.createElement('textarea');
            ke.value = key;
            document.body.appendChild(ke);
            ke.select();
            document.execCommand('copy');
            document.body.removeChild(ke);

            this.$toast.success('Key copied to the clipboard')
        },
        toggleApi(id) {
            axios.post(`/api/intel/toggle/${id}`, authHeader())
                .then(res => this.$store.dispatch('setUsers'))
                .catch(err => console.log(err))
        },
    },
}
</script>
