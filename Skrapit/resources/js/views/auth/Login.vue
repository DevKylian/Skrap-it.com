<template>
    <div>
        <div class="authentication-bg vsc-initialized">
            <div class="account-pages vertical-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="card card-auth auth-shadow">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-6 around-space">
                                            <img src="/img/brand/logo-colors.svg" class="mb-3" alt="" height="48">
                                            <h6 class="h4 mb-0 mt-4">Login to your account</h6>
                                            <p class="text-muted mt-0 mb-4">Never give your password to anyone.</p>
                                            <form @submit.prevent="login" method="POST" class="authentication-form">
                                                <div class="form-group">
                                                    <label class="form-control-label">Email</label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="text" class="form-control" id="email"
                                                               :class="{ 'is-invalid' : errors }"
                                                               placeholder="hello@skrap-it.com" v-model="form.email">
                                                    </div>
                                                    <span class="sred" v-if="errors">{{ errors }}</span>
                                                </div>
                                                <div class="form-group ">
                                                    <label class="form-control-label">Password <a href="#">
                                                        (Lost ?)</a></label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="password" class="form-control" id="password"
                                                               :class="{ 'is-invalid' : errors }"
                                                               placeholder="****************" v-model="form.password">
                                                    </div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="remember_me" v-model="form.remember_me" checked="">
                                                        <label class="custom-control-label" for="remember_me">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group mt-4 text-center">
                                                    <button class="sbtn sbtn-dark btn-block" type="submit">
                                                        <i class="fad fa-sign-in mr-3"></i>Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-lg-6 mobile-none">
                                            <div class="auth-page-sidebar bg-auth">
                                                <div class="overlay"></div>
                                                <div class="auth-user-testimonial-login center">
                                                    <p class="lead">"Our API is built to last. It is updated daily to
                                                        ensure maximum
                                                        information reliability.<br><br>
                                                        On top of that, we have a free offer for you to test it !"</p>
                                                    <p class="italic">- Kylian, CEO of Skrap-it</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12 text-center">
                                    <p class="text-muted">No account yet ?
                                        <router-link to="/register" class="text-primary font-weight-bold ml-1">Sign up
                                            now !
                                        </router-link>
                                    </p>
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

export default {

    data() {
        return {
            form: {
                email: null,
                password: null,
                remember_me: false
            },
            errors: null,
        }
    },
    methods: {
        ...mapGetters({
            isAdmin: 'getIsAdmin',
        }),
        login() {
            this.$store.dispatch('login', this.form)
                .catch(err => this.errors = err)
        }
    },
}
</script>
