<template>
    <Layout show-add-btn @modalToOpen="handleModalType">
        <div class="content-main" slot="mainContent" v-if="!bookLoading">
            <BookGrid
                :books="bookData" gridTitle="Books" 
                customTitleClass="dashboard-title"
                @modalToOpen="handleModalType"
                noBooksMessage="No books yet :("
                :userId="userInfo.id"
            />
        </div>

        <Spinner v-if="bookLoading" slot="mainContent" />       

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
import { mapState, mapActions } from 'vuex';
import Layout from '../../components/Layout/index.vue';
import BookGrid from '../../components/BookGrid/BookGrid.vue';
import Modal from '../../components/Modal/index.vue';
import BookForm from '../../components/BookForm/index.vue';
import Spinner from '../../components/Spinner/PageSpinner.vue';
import bookMixins from '../../mixins/book-mixins';
import modalMixins from '../../mixins/modal-mixins';
import authMixins from '../../mixins/auth-mixins';

export default {
    name: 'Shelf',
    mixins: [bookMixins, modalMixins, authMixins],
    components: { Layout, BookGrid, Modal, BookForm, Spinner },
    computed: {
        ...mapState('books', { bookData: 'books', bookLoading: 'loading' }),
    },
    methods: {
        ...mapActions('books', { 
            fetchBooks: 'fetchBooksAction' })
    },
    created: function() {
      this.fetchBooks();
    }
}
</script>

<style lang="scss" scoped>
</style>
