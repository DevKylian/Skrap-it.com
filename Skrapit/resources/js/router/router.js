import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: () => import('../views/dashboard/Dashboard'), name: 'Dashboard', meta: { title: 'Dashboard', requiresAuth: true } },
    { path: '/login', component: () => import('../views/auth/Login'), name: 'Login', meta: { title: 'Login', requiresGuest: true } },
    { path: '/register', component: () => import('../views/auth/Register'), name: 'Register', meta: { title: 'Register', requiresGuest: true } },
    { path: '/profile', component: () => import('../views/dashboard/Profile'), name: 'Profile', meta: { title: 'Profile', requiresAuth: true } },
    { path: '/packages', component: () => import('../views/dashboard/Packages'), name: 'Packages', meta: { title: 'Packages', requiresAuth: true } },
    { path: '/support', component: () => import('../views/dashboard/Support'), name: 'Support', meta: { title: 'Support', requiresAuth: true } },
    { path: '/apis', component: () => import('../views/dashboard/Apis'), name: 'Apis', meta: { title: 'Apis', requiresAuth: true } },
    { path: '/admin', component: () => import('../views/dashboard/Admin'), name: 'Admin', meta: { title: 'Admin', requiresAuth: true, requiresAdmin: true } },

    { path: '/request-email/:form', component: () => import('../views/auth/RequestEmail'), name: 'Request Email', meta: { title: 'Request Email', requiresGuest: true } },
    { path: '/activate/:token', component: () => import('../views/auth/Activate'), name: 'Activate', meta: { title: 'Activate', requiresGuest: true } },
    { path: '/reset-password/:token', component: () => import('../views/auth/ResetPassword'), name: 'Reset Password', meta: { title: 'Reset Password', requiresGuest: true } },

    { path: '*', redirect: '/login' }
]

const router = new VueRouter({
    mode: 'history',
    hashbang: false,
    routes,
})

router.afterEach((to, from) => {
    store.commit('SET_LOADING', true);
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    document.title = to.meta.title + " | Skrap-it"

    if(to.meta.requiresAuth && !token)
        store.dispatch('logout')

    if(to.meta.requiresAuth && token)
        store.dispatch('checkToken')

    if(to.meta.requiresGuest && token) {
        store.dispatch('checkToken')
        next('/dashboard')
    }

    if(to.meta.requiresAdmin) {
        store.dispatch('checkToken')
        store.getters.getIsAdmin ? next() : history.back()
    }

    next()
})

export default router
