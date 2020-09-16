<template>
    <div>
        <div class="page-title dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="d-flex justify-content-between">
                            <div class="page-title-content">
                                <p>Your Space</p>
                            </div>
                            <div class="align-self-center justify-content-end">
                                <button v-if="!isReloading" class="sbtn sbtn-dark" @click="refreshData">
                                    <i class="fad fa-sync-alt"></i>
                                    <span class="mobile-none ml-3">Refresh</span>
                                </button>
                                <ButtonLoader v-if="isReloading"></ButtonLoader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-3 col-md-6">
                        <div class="card sbg-dark img-card animate-up-2">
                            <div class="card-body" v-if="getLoading">
                                <StatsLoader></StatsLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="d-flex">
                                    <div class="swhite">
                                        <span class="h2 mb-0 stats-title font-weight-bold">
                                            {{ getUser.package.title }}
                                        </span>
                                        <p class="swhite mb-0">Package</p></div>
                                    <div class="ml-auto">
                                        <i class="fad fa-box-open swhite font-size-32 mr-2 mt-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 col-md-6">
                        <div class="card sbg-orange img-card animate-up-2">
                            <div class="card-body" v-if="getLoading">
                                <StatsLoader></StatsLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="d-flex">
                                    <div class="swhite">
                                        <span class="h2 mb-0 stats-title font-weight-bold">
                                            {{ getUser.expiration_date | daysRemaining }}
                                        </span>
                                        <p class="swhite mb-0">Expiration</p></div>
                                    <div class="ml-auto">
                                        <i class="fad fa-alarm-clock swhite font-size-32 mr-2 mt-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 col-md-6">
                        <div class="card sbg-red img-card animate-up-2">
                            <div class="card-body" v-if="getLoading">
                                <StatsLoader></StatsLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="d-flex">
                                    <div class="swhite">
                                        <span class="h2 mb-0 stats-title font-weight-bold">
                                            {{ percentageApiUsage() }} %
                                        </span>
                                        <p class="swhite mb-0">API usage</p></div>
                                    <div class="ml-auto">
                                        <i class="fad fa-project-diagram swhite font-size-32 mr-2 mt-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 col-md-6">
                        <div class="card sbg-dark img-card animate-up-2">
                            <div class="card-body" v-if="getLoading">
                                <StatsLoader></StatsLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="d-flex">
                                    <div class="swhite">
                                        <span class="h2 mb-0 stats-title font-weight-bold">
                                            {{ getCountApis }} / {{ getUser.package.max_api }}
                                        </span>
                                        <p class="swhite mb-0">API numbers</p></div>
                                    <div class="ml-auto">
                                        <i class="fad fa-layer-group swhite font-size-32 mr-2 mt-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-3 col-md-4 col-lg-3 col-xl-3 d-none d-sm-block">
                                        <img src="/img/dashboard/svg/empty_api.svg"
                                             class="mr-4 align-self-center img-fluid"
                                             alt="cal">
                                    </div>
                                    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-6">
                                        <div class="mt-4" v-if="getLoading">
                                            <IllustrationLoader></IllustrationLoader>
                                        </div>
                                        <div class="mt-4" v-if="!getLoading">
                                            <h5 class="mt-0 mb-3 font-weight-bold">You currently have no api key</h5>
                                            <p>Depending on your offer, you can generate X api keys, and your number of
                                                usage
                                                will decrease according to the use of these keys.</p>
                                            <router-link to="/apis">
                                                <span class="sbtn sbtn-orange animate-up-2 mt-3">
                                                    <i class="fad fa-plus-circle mr-3"></i>Create !
                                                </span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import StatsLoader from '../../components/Loader/StatsLoader'
import IllustrationLoader from "../../components/Loader/IllustrationLoader";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import moment from 'moment'

export default {
    components: {
        StatsLoader,
        IllustrationLoader,
        ButtonLoader,
    },
    data() {
        return {
            isReloading: false,
            isGenerateApiModalVisible: false,
        };
    },
    computed: {
        ...mapGetters({
            getUser: 'getUsers',
            getLoading: 'getLoading',
            getCountApis: 'getCountApis',
        }),
    },
    filters: {
        daysRemaining: function (start) {
            return moment(start).diff(moment(new Date()), 'days') + " days";
        }
    },
    methods: {
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
        percentage(partialValue, totalValue) {
            return Math.round((100 * partialValue) / totalValue);
        },
        percentageApiUsage() {
            return (this.getUser.apis.length <= 0) ? 0 : this.percentage(this.$store.getters.getApiUsage, this.getUser.package.max_uses)
        }
    },
}
</script>
