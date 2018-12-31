import { mapActions } from 'vuex';

export default {
    data: function() {
        return {
            modalId: 'book-modal',
            book: {
                title: null,
                price: null,
                isbn: null,
                image: null,
                imageName: null
            },
            openModal: false,
            modalType: null,
        }
    },
    methods: {
        ...mapActions('books', {
            updateNewBook: 'updateNewBookAction',
        }),
        handleModalType: function(modalType, book) {
            this.modalType = modalType;
            this.openModal = true;
            if (book) this.book = book;
        },
        handleCloseModal: function() {
            this.modalType = null;
            this.openModal = null;
            const book = {
                title: '',
                price: '',
                isbn: '',
                image: '',
                image_name: ''
            }
            this.updateNewBook(book);
        },
        handleModalEvent: function(modalType, book) {
            this.$emit('modalToOpen', modalType, book)
        },
        openAddModal: function() {
            return this.modalType === 'addBookModal' && this.openModal;
          },
        openEditModal: function() {
            return this.modalType === 'editBookModal' && this.openModal;
        }
    }
}
