<template>
    <div>
        <div class="page-title dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page-title-content">
                            <p>Your Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-8 col-xl-5">
                        <div class="card">
                            <div class="card-body" v-if="getLoading">
                                <FormLoader></FormLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="mb-4">
                                    <h5 class="mt-0 mb-3 font-weight-bold">
                                        Your current package
                                    </h5>
                                    <p>This can change at any time, in the
                                        <a href="" class="sdark font-weight-medium">packages section</a>.
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mt-4">
                                            <h6 class="mb-1">Package</h6>
                                            <h5 class="mb-0 sred font-weight-bold">{{ getPackageTitle() }}</h5>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mt-4">
                                            <h6 class="mb-1">Max uses</h6>
                                            <h5 class="mb-0 font-weight-bold">{{ getUser.package.max_uses }}</h5>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-auto">
                                        <div class="mt-4">
                                            <h6 class="mb-1">Max API</h6>
                                            <h5 class="mb-0 font-weight-bold">{{ getUser.package.max_api }}</h5>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-auto">
                                        <div class="mt-4">
                                            <h6 class="mb-1">Expiration date</h6>
                                            <h5 class="mb-0 font-weight-bold">
                                                {{ getUser.expiration_date | expirationDate }}</h5>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-auto">
                                        <div class="mt-4">
                                            <h6 class="mb-1">Pricing ($)</h6>
                                            <h5 class="mb-0 font-weight-bold">{{ getPrice() }}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-8 col-xl-5">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-5">
                                    <h5 class="mt-0 mb-3 font-weight-bold">
                                        Options & Notifications
                                    </h5>
                                    <p>Some options are only available with the
                                        <a href="#" class="sdark font-weight-medium">custom offer</a>.
                                    </p>
                                </div>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex align-items-center
                                    justify-content-between px-0 border-bottom">
                                        <div>
                                            <span class="h6 mb-1">Promotional e-mails</span>
                                            <p class="small pr-4">Receive our best promotional offers by e-mail
                                                as soon as they appear.</p>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-switch switch-lg">
                                                <input type="checkbox" class="custom-control-input" id="promotional">
                                                <label class="custom-control-label text-gray font-weight-normal"
                                                       for="promotional"></label>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex align-items-center justify-content-between px-0">
                                        <div>
                                            <span class="h6 mb-1">Api consumption alert</span>
                                            <p class="small pr-4">When you reach 80% of consumption on your APIs,
                                                receive an email alert.</p>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-switch switch-lg">
                                                <input type="checkbox" class="custom-control-input" id="consumption">
                                                <label class="custom-control-label text-gray font-weight-normal"
                                                       for="consumption"></label>
                                            </div>
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
</template>

<script>
import {mapGetters} from 'vuex';
import FormLoader from "../../components/Loader/FormLoader";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import moment from "moment";

export default {
    components: {
        FormLoader,
        ButtonLoader
    },
    computed: {
        ...mapGetters({
            getUser: 'getUsers',
            getLoading: 'getLoading'
        }),
    },
    filters: {
        expirationDate: function (date) {
            return moment(String(date)).format('D MMMM YYYY')
        }
    },
    data() {
        return {}
    },
    methods: {
        getPrice() {
            let price = this.getUser.package.price
            return price === 0 ? "Free" : price.toFixed(2)
        },
        getPackageTitle() {
            return this.getUser.package.title === "Free" ? "Free offer" : "Custom offer"
        },
    },
}
</script>
