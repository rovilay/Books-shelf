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
        handleModalType: function(modalType, book) {
            this.modalType = modalType;
            this.openModal = true;
            if (book) this.book = book;
        },
        handleCloseModal: function() {
            this.modalType = null;
            this.openModal = null;
            this.book = {
                    title: null,
                    price: null,
                    isbn: null,
                    image: null,
                    imageName: null
            }
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
