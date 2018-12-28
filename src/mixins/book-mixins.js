export default {
    methods: {
        updateBookDetails: function(book) {
            const newBook = { ...this.book, ...book };
            this.book = newBook;
        }
    }
}