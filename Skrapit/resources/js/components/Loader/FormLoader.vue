<template>
    <content-loader
        :height="180"
        :width="480"
        :speed="4"
        primaryColor="#f2f6fe"
        secondaryColor="#e0eafa"
    >
        <rect x="7" y="28" rx="4" ry="4" width="204" height="26.52" />
        <rect x="268" y="28" rx="4" ry="4" width="204" height="26.52" />
        <rect x="6" y="90" rx="4" ry="4" width="204" height="26.52" />
        <rect x="266" y="90" rx="4" ry="4" width="204" height="26.52" />
        <rect x="6" y="150" rx="4" ry="4" width="204" height="26.52" />
        <rect x="266" y="149" rx="4" ry="4" width="204" height="26.52" />
        <rect x="8" y="134" rx="4" ry="4" width="65.28" height="8.49" />
        <rect x="7" y="74" rx="4" ry="4" width="65.28" height="8.49" />
        <rect x="267" y="75" rx="4" ry="4" width="65.28" height="8.49" />
        <rect x="267" y="135" rx="4" ry="4" width="65.28" height="8.49" />
        <rect x="7" y="14" rx="4" ry="4" width="65.28" height="8.49" />
        <rect x="268" y="14" rx="4" ry="4" width="65.28" height="8.49" />
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
