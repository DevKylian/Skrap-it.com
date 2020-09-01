<template>
    <div>
        <Header v-if="loggedin"/>
        <router-view></router-view>
        <Footer v-if="loggedin"/>
    </div>
</template>

<script>

import Header from "./dashboard/Header";
import Footer from "./dashboard/Footer";

export default {
    computed: {
        loggedin() {
            return this.$store.getters.isLogged;
        }
    },
    name: 'main-app',
    components: { Header, Footer },
}

</script>
