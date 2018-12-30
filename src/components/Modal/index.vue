<template>
    <div
        :id="modalId" class="bs-modal"
        :class="[customModalClass, { 'modal-visible': visible }]"
    >
        <div class="bs-modal-content" :class="customContentClass">
            <div class="bs-modal-header">
                <h4>{{modalTitle}}</h4>
                <span id="closeBtn" @click="closeModal(modalId)" class="closeBtn">&times;</span>
            </div>
            <div class="bs-modal-body">
                <slot name='modal-content'></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        modalId: { type: [String, Number], required: true },
        customModalClass: { type: String, required: false, default: '' },
        modalTitle: { type: String, required: false, default: '' },
        visible: { type: Boolean, default: false }
    },
    computed: {
        customContentClass() { return `${this.customModalClass}-content` }, 
    },
    methods: {
        closeModal: function() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" src="./modal.scss" scoped>
</style>

