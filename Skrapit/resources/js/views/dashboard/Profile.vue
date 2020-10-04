<template>
    <div>
        <div class="page-title dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page-title-content">
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-7">
                        <div class="card">
                            <div class="card-body" v-if="getLoading">
                                <FormLoader></FormLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="mb-5">
                                    <h5 class="mt-0 mb-3 font-weight-bold">
                                        Edit your profile
                                    </h5>
                                    <p>This information only appears here, you are the only one who can see it.</p>
                                </div>
                                <form @submit.prevent="editProfile" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Firstname</label>
                                            <input type="text" class="form-control" placeholder="" name="firstname"
                                                   v-model="form.firstname"
                                                   :class="{ 'is-invalid' : errors.firstname }">
                                            <span class="sred" v-if="errors.firstname"> {{ errors.firstname[0] }}</span>
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Lastname</label>
                                            <input type="text" class="form-control" placeholder="" name="lastname"
                                                   v-model="form.lastname"
                                                   :class="{ 'is-invalid' : errors.lastname }">
                                            <span class="sred" v-if="errors.lastname"> {{ errors.lastname[0] }}</span>
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Email</label>
                                            <input type="text" class="form-control" placeholder=""
                                                   name="email" v-model="form.email"
                                                   :class="{ 'is-invalid' : errors.email }">
                                            <span class="sred" v-if="errors.email"> {{ errors.email[0] }}</span>
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Phone number</label>
                                            <input type="text" class="form-control" placeholder=""
                                                   name="phone_number" v-model="form.phone_number"
                                                   :class="{ 'is-invalid' : errors.phone_number }">
                                            <span class="sred" v-if="errors.phone_number">
                                                {{ errors.phone_number[0] }}
                                            </span>
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Address</label>
                                            <input type="text" class="form-control" placeholder=""
                                                   name="address" v-model="form.address"
                                                   :class="{ 'is-invalid' : errors.address }">
                                            <span class="sred" v-if="errors.address"> {{ errors.address[0] }}</span>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" v-if="!isReloading" class="sbtn sbtn-dark">
                                                <i class="fad fa-save"></i>
                                                <span class="mobile-none ml-3">Edit</span>
                                            </button>
                                            <ButtonLoader v-if="isReloading"></ButtonLoader>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5">
                        <div class="card">
                            <div class="card-body" v-if="getLoading">
                                <FormLoader></FormLoader>
                            </div>
                            <div class="card-body" v-if="!getLoading">
                                <div class="mb-5">
                                    <h5 class="mt-0 mb-3 font-weight-bold">
                                        Change your password
                                    </h5>
                                    <p>Never give out your password, not even to an administrator.</p>
                                </div>
                                <form @submit.prevent="editPassword" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">New password</label>
                                            <input type="password" class="form-control" id="password"
                                                   :class="{ 'is-invalid' : errors.password }"
                                                   placeholder="****************" v-model="passwords.password">
                                            <span class="sred" v-if="errors.password"> {{ errors.password[0] }}</span>
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Confirm New Password</label>
                                            <input type="password" class="form-control"
                                                   id="password_confirmation"
                                                   :class="{ 'is-invalid' : errors.password }"
                                                   placeholder="****************"
                                                   v-model="passwords.password_confirmation">
                                        </div>
                                        <div class="form-group col-12">
                                            <p class="mt-2 mb-0">The password must be 8 characters.</p>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" v-if="!isReloading" class="sbtn sbtn-dark">
                                                <i class="fad fa-save"></i>
                                                <span class="mobile-none ml-3">Change</span>
                                            </button>
                                            <ButtonLoader v-if="isReloading"></ButtonLoader>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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
                                            <h5 class="mb-0 font-weight-bold">{{ getUser.expiration_date | expirationDate }}</h5>
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
        return {
            isReloading: false,
            form: {
                'firstname': '',
                'lastname': '',
                'email': '',
                'phone_number': '',
                'address': '',
            },
            passwords: {
                password: null,
                password_confirmation: null,
            },
            errors: {},
        }
    },
    methods: {
        getPrice() {
            let price = this.getUser.package.price
            return price === 0 ? "Free" : price.toFixed(2)
        },
        getPackageTitle() {
            return this.getUser.package.title === "Free" ? "Free offer" : "Custom offer"
        },
        editProfile() {
            axios.post('/api/auth/edit-profile', this.form)
                .then(res => {
                    this.$toast.success(res.data.success)
                    this.errors = {}
                    this.disableButton()
                    this.$store.dispatch('setUsers')
                })
                .catch(err => {
                    if (err) this.errors = err.response.data.errors
                })
        },
        editPassword() {
            axios.post('/api/auth/edit-password', this.passwords)
                .then(res => {
                    this.$toast.success(res.data.success)
                    this.errors = {}
                    this.disableButton()
                })
                .catch(err => {
                    if (err) this.errors = err.response.data.errors
                })
        },
        disableButton() {
            this.isReloading = true;
            setTimeout(() => {
                this.isReloading = false;
            }, 2000);
        },
    },
    watch: {
        '$store.getters.getUsers'(user) {
            this.form.firstname = user.firstname;
            this.form.lastname = user.lastname;
            this.form.email = user.email;
            this.form.phone_number = user.phone_number;
            this.form.address = user.address;
            this.form.country = user.country;
        },
    },
}
</script>
