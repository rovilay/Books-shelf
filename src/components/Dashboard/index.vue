<template>
    <Layout show-add-btn @modalToOpen="handleModalType">
        <div slot="mainContent" class="content-main">
            <router-view @modalToOpen="handleModalType"></router-view>
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
        <Modal
            slot="mainContent" modal-title="Edit Book"
            :modal-id="modalId" :visible="openEditModal()"
            v-if="openEditModal()"
            @closeModal="handleCloseModal"
        >
            <BookForm 
                slot="modal-content" buttonLabel="Update"
                @newBook="updateBookDetails" :book="book"
            />
        </Modal>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';
import Modal from '../Shared/Modal/index.vue';
import BookForm from '../AddBook/index.vue';
import bookMixin from '../../mixins/book-mixins';
import modalMixin from '../../mixins/modal-mixins';

export default {
  name: 'Dash_board',
  mixins: [bookMixin, modalMixin],
  components: { Layout, Modal, BookForm },
}
</script>

<style lang="scss">
</style>
