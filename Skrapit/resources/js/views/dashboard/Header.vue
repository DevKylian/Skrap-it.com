<template>
    <div>
        <div id="main-wrapper">
            <div class="header dashboard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <a class="navbar-brand" href="index.php">
                                    <img src="/img/brand/logo-colors.svg" alt="" class="desktop">
                                    <img src="/img/brand/icon-colors.svg" alt="" class="mobile">
                                </a>
                                <div class="dashboard_log my-2">
                                    <div class="d-flex align-items-center">
                                        <router-link to="/packages" class="mr-4 mobile-none" v-if="!isAdmin">
                                            <span class="sred mr-2 font-weight-bold">Become Premium now !</span>
                                            <span class="sbadge-price-sm sbadge-soft-red right-3">
                                                -70%
                                            </span>
                                        </router-link>
                                        <router-link to="/admin" class="mr-3 mobile-none" v-else>
                                            <span class="sred mr-2 font-weight-bold">
                                                <i class="fad fa-unlock mr-3"></i>
                                                Logged in as admin
                                            </span>
                                        </router-link>
                                        <div class="dropdown profile_log">
                                            <div class="profile_log" data-toggle="dropdown" aria-expanded="false">
                                                <div class="user">
                                                    <img class="mr-3 rounded-circle mr-0 mr-sm-3"
                                                         src="/img/dashboard/user.png"
                                                         width="40" height="40" alt="">
                                                    <span class="name">{{ getUser.email }}</span>
                                                    <span class="arrow"><i class="la la-angle-down"></i></span>
                                                </div>
                                            </div>
                                            <ul class="dropdown-menu dropdown-menu-right dropdown-shadow">
                                                <router-link to="/profile">
                                                    <li class="dropdown-item user">
                                                        <i class="fad fa-cog"></i> Settings
                                                    </li>
                                                </router-link>
                                                <li @click="logout" class="dropdown-item user">
                                                    <i class="fad fa-sign-out"></i>
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sidebar sbg-dark">
                <div class="menu flex-grow-1">
                    <ul>
                        <li>
                            <router-link to="/dashboard" tooltip="Dashboard" flow="right">
                                <span><i class="fad fa-home fa-lg"></i></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/profile" tooltip="Profile" flow="right">
                                <span><i class="fad fa-user fa-lg"></i></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/apis" tooltip="API's" flow="right">
                                <span><i class="fad fa-project-diagram fa-lg"></i></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/packages" tooltip="Packages" flow="right">
                                <span><i class="fad fa-cubes fa-lg"></i></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/support" tooltip="Support" flow="right">
                                <span><i class="fad fa-question-circle"></i></span>
                            </router-link>
                        </li>
                        <li v-if="isAdmin">
                            <router-link to="/admin" tooltip="Administration" flow="right">
                                <span><i class="fad fa-planet-ringed fa-lg sred"></i></span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            isAdmin: 'getIsAdmin',
            getUser: 'getUsers',
            getLoading: 'getLoading'
        })
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }

}
</script>
