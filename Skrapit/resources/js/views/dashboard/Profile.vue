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
                                <form method="post">
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Firstname</label>
                                            <input type="text" class="form-control" placeholder="John" name="firstname"
                                                   v-model="form.firstname">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Lastname</label>
                                            <input type="text" class="form-control" placeholder="Doe" name="lastname"
                                                   v-model="form.lastname">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Email</label>
                                            <input type="text" class="form-control" placeholder="john.doe@skrap-it.com"
                                                   name="email" v-model="form.email">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Phone number</label>
                                            <input type="text" class="form-control" placeholder="2135096995"
                                                   name="phone_number" v-model="form.phone_number">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Address (Optional)</label>
                                            <input type="text" class="form-control" placeholder="42th John Street"
                                                   name="address" v-model="form.address">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Country</label>
                                            <input type="text" class="form-control" placeholder="France" name="country"
                                                   v-model="form.country">
                                        </div>
                                        <div class="col-12">
                                            <a href="" class="sbtn sbtn-dark"><i class="fad fa-save mr-3"></i>Save</a>
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
                                <form action="#">
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">New password</label>
                                            <input type="password" name="new_password" class="form-control"
                                                   placeholder="********">
                                        </div>
                                        <div class="form-group col-xl-6">
                                            <label class="mr-sm-2">Confirm new password</label>
                                            <input type="password" name="confirm_new_password" class="form-control"
                                                   placeholder="********">
                                        </div>
                                        <div class="form-group col-12">
                                            <p class="mt-2 mb-0">The password must be 8 characters, 1 capital letter,
                                                one
                                                lowercase and a number.</p>
                                        </div>
                                        <div class="col-12">
                                            <a href="" class="sbtn sbtn-dark"><i class="fad fa-save mr-3"></i>Save</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormLoader from "../../components/Loader/FormLoader";
import {mapGetters} from 'vuex';

export default {
    components: {
        FormLoader
    },
    computed: {
        ...mapGetters({
            getUser: 'getUsers',
            getLoading: 'getLoading'
        }),
    },
    data() {
        return {
            form: {
                'firstname': '',
                'lastname': '',
                'email': '',
                'phone_number': '',
                'address': '',
                'country': '',
            },
        }
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
