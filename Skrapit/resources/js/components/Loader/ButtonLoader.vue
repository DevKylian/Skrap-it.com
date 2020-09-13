<template>
    <div>
        <button :disabled="true" class="sbtn" :class="color">
            <i class="fad fa-sync-alt fa-spin"></i>
            <span class="mobile-none ml-3">Please wait ...</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'sbtn-dark'
        }
    }
}
</script>

<style>

</style>
