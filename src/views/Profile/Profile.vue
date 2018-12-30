<template>
    <Layout show-add-btn @modalToOpen="handleModalType">
        <div slot="mainContent" class="profile">
            <h1>Profile</h1>
        </div>
        <Modal
            slot="mainContent" modal-title="Add Book"
            :modal-id="modalId" :visible="openAddModal()"
            @closeModal="handleCloseModal" v-if="openAddModal()"
        >
            <BookForm 
                slot="modal-content" buttonLabel="Send"
                @newBook="updateBookDetails" :book="book"
            />
        </Modal>
    </Layout>
</template>

<script>
import Layout from '../../components/Layout/index.vue';
import modalMixins from '../../mixins/modal-mixins';
import bookMixins from '../../mixins/book-mixins';
import Modal from '../../components/Modal/index.vue';
import BookForm from '../../components/BookForm/index.vue';
import authMixins from '../../mixins/auth-mixins';

export default {
    name: 'Profile',
    mixins: [bookMixins, modalMixins, authMixins],
    components: { Layout, BookForm, Modal }
}
</script>

<style lang="scss" scoped>
</style>
