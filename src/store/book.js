import instance from '../../server.config';
import toast from '../Utils/toasts';
import apiErrorHandler from '../Utils/apiErrorHandler';

const state = {
    books: [],
    message: '',
    loading: false,
    success: false,
    errors: null,
};

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
    fetchBooksFailure: function(state, error) {
        state.errors = error;
        state.loading = false;
        state.success = false;
        state.message = ''
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
    favBookFailure: function(state, error) {
        state.errors = error;
        state.loading = false;
        state.success = false;
        state.message = ''
    },
};

const actions = {
    fetchBooksAction: async function({ commit }, personal=false) {
        try {
            commit('fetchBooks');
            const server = instance();
            const url = `/books?personal=${personal}`;
            const response = await server.get(url);

            return commit('fetchBooksSuccess', response.data);
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('fetchBooksFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    fetchFavBooksAction: async function({ commit }) {
        try {
            commit('fetchBooks');
            const server = instance();
            const url = '/books/favourites';
            const response = await server.get(url);
            const { book_data, success, message } = response.data;
            return commit('fetchBooksSuccess', { book_data, success, message });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('fetchBooksFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    addFavBookAction: async function({ commit }, { id }) {
        try {
            const server = instance();
            const url = `/books/${id}/favourites`;
            const response = await server.post(url);
            const { book_data, success, message } = response.data;
            return commit('favBookSuccess', { book_data, success, message });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('favBookFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    removeFavBookAction: async function({ commit }, { id }) {
        try {
            const server = instance();
            const url = `/books/${id}/favourites`;
            const response = await server.delete(url);
            const { success, message } = response.data;
            return commit('removeFavBookSuccess', { bookId: id, success, message });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('favBookFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    }
};

const getters = {
    getBestSellers: function(state) {
        return [...state.books].slice(0, 6);
    },
    getFavourites: function(state) {
        return state.books.filter(book => book.favourite)
    },
    getNewReleases: function(state) {
        return [...state.books].slice(0, 3);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
