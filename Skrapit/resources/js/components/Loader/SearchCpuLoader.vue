<template>
    <content-loader
        :height="35"
        :width="130"
        :speed="4"
        primaryColor="#f2f6fe"
        secondaryColor="#e0eafa"
    >
        <rect x="9" y="2" rx="4" ry="4" width="117" height="6.4" />
        <rect x="9" y="19" rx="3" ry="3" width="85" height="6.4" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader"

export default {
    components: {
        ContentLoader
    }
}
</script>
