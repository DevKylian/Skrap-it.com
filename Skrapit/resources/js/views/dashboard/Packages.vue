<template>
    <div>
        <div class="page-title dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page-title-content">
                            <p>All Packages</p>
                            <div class="d-flex align-items-center mt-3">
                                <span class="h5 font-weight-normal mr-4 mt-2">Monthly</span>
                                <div class="custom-control custom-switch switch-lg">
                                    <input type="checkbox" class="custom-control-input" id="billingSwitch"
                                    @click="switchDays">
                                    <label class="custom-control-label text-gray font-weight-normal"
                                           for="billingSwitch"></label>
                                </div>
                                <span class="h5 font-weight-normal ml-1 mt-2">Annual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row text-gray">
                    <div class="col-lg-5 col-xl-4">
                        <div class="card shadow-soft mb-5 mb-lg-6 px-2">
                            <div class="card-header border-light px-4 position-relative">
                                <div class="d-flex mb-3 mt-5"><span class="display-2 mb-0">Free</span> <span
                                    class="h6 font-weight-normal align-self-end">/life</span></div>
                                <h4 class="mb-3 text-black">Economic</h4>
                                <p class="font-weight-normal mb-0">Do you know how to satisfy yourself just a little?
                                    This offer is made for you !</p>
                            </div>
                            <div class="card-body pt-3">
                                <ul class="list-group simple-list">
                                    <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    1.000</span> uses
                                    </li>
                                    <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Maximum 1 API</span></li>
                                </ul>
                            </div>
                            <div class="card-footer px-4 pb-4">
                                <a href="#" @click="subscribePackage(true)"
                                   class="btn btn-block sbtn-dark animate-up-2">
                                    Start
                                    <span class="icon icon-xs">
                                        <i class="fas fa-arrow-right ml-3"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-6">
                        <div class="card shadow-soft mb-5 mb-lg-6 px-2">
                            <div class="card-header border-light px-4 position-relative">
                                <div class="d-flex mb-3 mt-5 text-primary"><span class="h5 mb-0">$</span><span
                                    class="price display-2 sred mb-0">{{ calculPrice() }}</span>
                                    <span class="h6 font-weight-normal align-self-end" data-id="duration">
                                        /{{ duration }}
                                    </span>
                                </div>
                                <h4 class="mb-3 text-black">Custom Offer</h4>
                                <p class="font-weight-normal mb-0">
                                    Adjust the sliders to find the offer that suits you best !
                                </p>
                            </div>
                            <div class="card-body pt-3">
                                <ul class="list-group simple-list">

                                    <li class="list-group-item font-weight-normal">
                                        <span class="sdark">
                                            <i class="fas fa-check sred"></i>
                                        </span>
                                        <span class="font-weight-bolder">{{ package.uses }}</span> uses
                                    </li>
                                    <input type="range" :min="1000" :max="100000" step="1000"
                                           class="custom-range" v-model="package.uses">

                                    <li class="list-group-item font-weight-normal pt-4">
                                        <span class="sdark">
                                            <i class="fas fa-check sred"></i>
                                        </span>
                                        <span class="font-weight-bolder">Maximum {{ package.api }} API</span>
                                    </li>
                                    <input type="range" :min="1" :max="100"
                                           class="custom-range" v-model="package.api">

                                    <span class="sred mt-4" v-if="errors.package">{{ errors.package[0] }}</span>
                                </ul>
                            </div>
                            <div class="card-footer px-4 pb-4">
                                <a href="#" @click="subscribePackage(false)"
                                   class="btn btn-block sbtn-red animate-up-2">
                                    Start
                                    <span class="icon icon-xs">
                                        <i class="fas fa-arrow-right ml-3"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            package: {
                uses: 1000,
                api: 1,
                price: 1.50,
                days: 30,
            },
            freePackage: {
                free: true
            },
            duration: "month",
            errors: {}
        }
    },
    methods: {
        switchDuration() {
            return this.duration = (this.duration === "month") ? "year" : "month"
        },
        switchDays() {
            this.switchDuration()
            return this.package.days = this.package.days === 30 ? 365 : 30
        },
        calculPrice() {
            let price = (((this.package.uses / 1000) * 0.5) + parseInt(this.package.api)).toFixed(2);
            return this.package.price = (this.package.days === 30) ? price : price * 8
        },
        subscribePackage(free) {
            let data = free ? this.freePackage : this.package

            this.$store.dispatch('subscribePackage', data)
                .then((res) => {
                    this.$toast.success(res.data.success)
                    this.errors = {}
                })
                .catch(err => {if(err) this.errors = err})
        }
    }
}
</script>
