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
                                            <h6 class="h4 mb-0 mt-4">Reset your password</h6>
                                            <p class="text-muted mt-0 mb-4">Never give your password to anyone.</p>
                                            <div class="form-group ">
                                                <label class="form-control-label">New Password</label>
                                                <div class="input-group input-group-merge">
                                                    <input type="password" class="form-control" id="new_password"
                                                           :class="{ 'is-invalid' : errors.new_password }"
                                                           placeholder="****************" v-model="form.new_password">
                                                </div>
                                                <span class="sred" v-if="errors.new_password"> {{ errors.new_password[0] }}</span>
                                            </div>
                                            <div class="form-group ">
                                                <label class="form-control-label">Confirm New Password</label>
                                                <div class="input-group input-group-merge">
                                                    <input type="password" class="form-control" id="new_password_confirmation"
                                                           :class="{ 'is-invalid' : errors.new_password_confirmation }"
                                                           placeholder="****************" v-model="form.new_password_confirmation">
                                                </div>
                                                <span class="sred" v-if="errors.new_password_confirmation">
                                                    {{ errors.new_password_confirmation[0] }}
                                                </span>
                                            </div>
                                            <div class="form-group mt-4 text-center">
                                                <button class="sbtn sbtn-dark btn-block" type="submit">
                                                    <i class="fad fa-sign-in mr-3"></i>Change my password
                                                </button>
                                            </div>
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
                                        <router-link to="/register" class="text-primary font-weight-bold ml-1">
                                            Sign up now !
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
export default {
    mounted() {

    },
    data() {
        return {
            token: this.$route.params.token,
            form: {
                new_password: null,
                new_password_confirmation: null,
            },
            errors: {},
        }
    },
    methods: {

    },
}
</script>
