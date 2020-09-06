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
                                            <h6 class="h4 mb-0 mt-4">{{ titleForm }}</h6>
                                            <p class="text-muted mt-0 mb-4">Make sure that you have access to your mailbox.</p>
                                            <form @submit.prevent="sendEmail" method="POST" class="authentication-form">
                                                <div class="form-group ">
                                                    <label class="form-control-label">Email</label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="text" class="form-control" id="email"
                                                               :class="{ 'is-invalid' : errors.email }"
                                                               placeholder="hello@skrap-it.com" v-model="form.email">
                                                    </div>
                                                    <span class="sred" v-if="errors.email"> {{ errors.email[0] }}</span>
                                                </div>
                                                <div class="form-group mt-4 text-center">
                                                    <button class="sbtn sbtn-dark btn-block" type="submit">
                                                        <i class="fad fa-envelope mr-3"></i>Send email
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
        this.checkParameters()
    },
    data() {
        return {
            titleForm: '',
            form: {
                email: null
            },
            errors: {}
        }
    },
    methods: {
        checkParameters() {
            switch(this.$route.params.form) {
                case "activation":
                    this.titleForm = 'Request new confirmation email'
                    break;
                case "reset-password":
                    this.titleForm = 'Reset password email'
                    break;
                default:
                    this.$router.push('/login')
            }
        },
        sendEmail() {
            if(this.$route.params.form === "activation")
                this.resendActivation()
            if(this.$route.params.form === "reset-password")
                this.resetPassword()
        },
        resendActivation() {
            axios.post('/api/auth/request-activation', this.form)
                .then(res => {
                    this.$router.push({name:'Login'})
                    this.$toast.success(res.data.success)
                })
                .catch(err => this.errors = err.response.data.errors)
        },
        resetPassword() {
            axios.post('/api/auth/request-reset-password', this.form)
                .then(res => {
                    this.$router.push({name:'Login'})
                    this.$toast.success(res.data.success)
                })
                .catch(err => this.errors = err.response.data.errors)
        },
    },
}
</script>
