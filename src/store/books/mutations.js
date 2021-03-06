const mutations = {
    fetchBooks: function(state) {
        state.loading = true;
    },
    fetchBooksSuccess: function(state, response) {
        const { book_data, success, message } = response;
        state.books = [...book_data];
        state.success = success;
        state.message = message;
        state.loading = false;
        state.errors = null;
    },
    favBookSuccess: function(state, response) {
        const { book_data, success, message } = response;
        const updated_books = state.books.map(book => {
            if (book.id === book_data.id) book.favourite = true;
            return book;
        });
        state.books = updated_books;
        state.success = success;
        state.message = message;
        state.loading = false;
        state.errors = null;
    },
    removeFavBookSuccess: function(state, response) {
        const { bookId, success, message } = response;
        const updated_books = state.books.map(book => {
            if (book.id === bookId) book.favourite = undefined;
            return book;
        });
        state.books = updated_books;
        state.success = success;
        state.message = message;
        state.loading = false;
        state.errors = null;
    },
    deleteBookSuccess: function(state, response) {
        const { bookId, success, message } = response;
        state.books = state.books.filter(book => book.id !== bookId);
        state.success = success;
        state.message = message;
        state.loading = false;
        state.errors = null;
    },
    updateNewBook: function(state, bookData) {
        state.newBook = { ...state.newBook, ...bookData }
    },
    postBook: function(state) {
        state.postingBook = true;
    },
    postNewBookSuccess: function(state, response) {
        const { book_data, success, message } = response;
        state.success = success;
        state.message = message;
        state.postingBook = false;
        state.books = [...state.books, book_data];
        state.newBook = {
            title: '',
            price: '',
            isbn: '',
            image: '',
            image_name: '',
        };
        state.errors = null;
    },
    updateBookSuccess: function(state, response) {
        const { book_data, success, message } = response;
        const updated_books = state.books.map(book => {
            if (book.id === book_data.id) return { ...book, ...book_data };
            return book;
        });
        state.success = success;
        state.message = message;
        state.postingBook = false;
        state.books = updated_books;
        state.newBook = {
            title: '',
            price: '',
            isbn: '',
            image: '',
            image_name: '',
        };
        state.errors = null;
    },
    bookActionsFailure: function(state, error) {
        state.errors = error;
        state.loading = false;
        state.postingBook = false;
        state.success = false;
        state.message = ''
    },
};

export default mutations;