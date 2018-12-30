<template>
    <Layout show-add-btn @modalToOpen="handleModalType">
        <div class="content-main" slot="mainContent">
            <BookGrid
                :books="bookData" gridTitle="My Shelf" 
                customTitleClass="dashboard-title"
                @modalToOpen="handleModalType"
            />
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
import Layout from '../../components/Layout/index.vue';
import BookGrid from '../../components/BookGrid/BookGrid.vue';
import Modal from '../../components/Modal/index.vue';
import BookForm from '../../components/BookForm/index.vue';
import bookData from '../../data/mockData';
import bookMixins from '../../mixins/book-mixins';
import modalMixins from '../../mixins/modal-mixins';
import authMixins from '../../mixins/auth-mixins';

export default {
    name: 'Shelf',
  mixins: [bookMixins, modalMixins, authMixins],
    data() {
        return { bookData }
    },
    components: { Layout, BookGrid, Modal, BookForm }
}
</script>

<style lang="scss" scoped>
</style>
