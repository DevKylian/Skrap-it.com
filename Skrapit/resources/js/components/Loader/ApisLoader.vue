<template>
    <content-loader
        :height="65"
        :width="480"
        :speed="4"
        primaryColor="#f2f6fe"
        secondaryColor="#e0eafa"
    >
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
        <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
        <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="30" cy="30" r="30" />
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
