<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper modal">
                <div :class="size" class="modal-dialog modal-dialog-centered" @click.stop>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="generateApiTitle">
                                <slot name="title"></slot>
                            </h4>
                            <button type="button" class="close" @click="$emit('close')">
                                <i class="fad fa-times-circle"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <slot name="body"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
    props: {
        size: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(10px);
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
