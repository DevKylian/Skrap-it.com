<template>
    <content-loader
        :height="109"
        :width="195"
        :speed="4"
        primaryColor="#f2f6fe"
        secondaryColor="#e0eafa"
    >
        <rect x="5.77" y="45.3" rx="4" ry="4" width="158.05" height="8.58" />
        <circle cx="73.56" cy="47.17" r="1" />
        <rect x="5.77" y="58.28" rx="4" ry="4" width="183.48" height="8.58" />
        <rect x="5.77" y="31.66" rx="4" ry="4" width="132.41" height="8.58" />
        <rect x="6.09" y="83.76" rx="0" ry="0" width="80.2" height="16.82" />
        <rect x="5.77" y="7" rx="4" ry="4" width="79.2" height="8.58" />
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
