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
                                            <img src="/img/brand/logo-colors.svg" class="mb-5" alt="" height="48">
                                            <div class="text-center" v-if="tokenIsValid">
                                                <i class="fad fa-check-circle big-icon sgreen"></i>
                                                <div class="mt-4">
                                                    <h4>Welcome to Skrap-it !</h4>
                                                    <h5 class="text-muted">Your account is now activated.</h5>
                                                </div>
                                            </div>
                                            <div class="text-center" v-if="!tokenIsValid">
                                                <i class="fad fa-times-circle big-icon sred"></i>
                                                <div class="mt-4">
                                                    <h4 v-if="errors.token">{{ errors.token[0] }}</h4>
                                                    <h5 class="text-muted">This token is no longer valid.</h5>
                                                </div>
                                            </div>
                                            <div class="form-group mt-4 text-center">
                                                <router-link to="/login" class="text-primary font-weight-bold ml-1">
                                                    <button class="sbtn sbtn-dark" type="submit"><i
                                                        class="fad fa-sign-in mr-3"></i>Sign in
                                                    </button>
                                                </router-link>
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
export default {
    mounted() {
        this.validToken(this.token)
    },
    data() {
        return {
            tokenIsValid: false,
            token: this.$route.params.token,
            errors: {}
        }
    },
    methods: {
        validToken(token) {
            const uri = `/api/auth/activate/${token}`
            return new Promise((resolve, reject) => {
                axios.post(uri, token)
                    .then(resp => {
                        this.tokenIsValid = true;
                        resolve(resp)
                    })
                    .catch(err => {
                        this.tokenIsValid = false;
                        this.errors = err.response.data.errors
                        reject(err.response.data.errors)
                    })
            })
        }
    },
}
</script>
