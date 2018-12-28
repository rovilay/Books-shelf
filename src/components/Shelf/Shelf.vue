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
import Layout from '../Shared/Layout/index.vue';
import BookGrid from '../Shared/BookGrid/BookGrid.vue';
import Modal from '../Shared/Modal/index.vue';
import BookForm from '../AddBook/index.vue';
import bookData from '../../data/mockData';
import bookMixins from '../../mixins/book-mixins';
import modalMixins from '../../mixins/modal-mixins';

export default {
    name: 'Shelf',
    mixins: [bookMixins, modalMixins],
    data() {
        return { bookData }
    },
    components: { Layout, BookGrid, Modal, BookForm }
}
</script>

<style lang="scss" scoped>
</style>
