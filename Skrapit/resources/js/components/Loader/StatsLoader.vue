<template>
    <content-loader
        :height="78"
        :width="390"
        :speed="4"
        primaryColor="#f2f6fe"
        secondaryColor="#e0eafa"
    >
        <rect x="9" y="20" rx="4" ry="4" width="142" height="13" />
        <rect x="316.38" y="5.38" rx="5" ry="5" width="68" height="68" />
        <rect x="9" y="46" rx="4" ry="4" width="75.26" height="13.26" />
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
