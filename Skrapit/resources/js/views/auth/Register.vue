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
                                            <h6 class="h4 mb-0 mt-4">Create your account</h6>
                                            <p class="text-muted mt-0 mb-4">Welcome to Skrap-it, take advantage of the
                                                free
                                                offer.</p>
                                            <form @submit.prevent="register" method="POST" class="authentication-form">
                                                <div class="form-group">
                                                    <label class="form-control-label">Email</label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="text" class="form-control" id="email"
                                                               :class="{ 'is-invalid' : errors.email }"
                                                               placeholder="hello@skrap-it.com" v-model="form.email">
                                                    </div>
                                                    <span class="sred" v-if="errors.email"> {{ errors.email[0] }}</span>
                                                </div>
                                                <div class="form-group ">
                                                    <label class="form-control-label">Password</label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="password" class="form-control" id="password"
                                                               :class="{ 'is-invalid' : errors.password }"
                                                               placeholder="****************" v-model="form.password">
                                                    </div>
                                                    <span class="sred" v-if="errors.password"> {{ errors.password[0] }}</span>
                                                </div>
                                                <div class="form-group ">
                                                    <label class="form-control-label">Password confirmation</label>
                                                    <div class="input-group input-group-merge">
                                                        <input type="password" class="form-control" id="password_confirmation"
                                                               :class="{ 'is-invalid' : errors.password }"
                                                               placeholder="****************" v-model="form.password_confirmation">
                                                    </div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                               id="checkbox-signup"
                                                               checked="">
                                                        <label class="custom-control-label" for="checkbox-signup">I
                                                            agree to the
                                                            <a href="#">terms and conditions of use</a></label>
                                                    </div>
                                                </div>
                                                <div class="form-group mt-4 text-center">
                                                    <button class="sbtn sbtn-dark btn-block" type="submit"><i
                                                        class="fad fa-sign-in mr-3"></i>Register
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
                                    <p class="text-muted">Already registered ?
                                        <router-link to="/login" class="text-primary font-weight-bold ml-1">Sign in !
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
    data() {
        return {
            form: {
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },
    methods: {
        register() {
            axios.post('/api/auth/register', this.form)
                .then(res => this.$router.push({name:'Login'}))
                .catch(error => this.errors = error.response.data.errors)
        },
    }
}
</script>
