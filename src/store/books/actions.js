import instance from '../../../server.config';
import toast from '../../Utils/toasts';
import apiErrorHandler from '../../Utils/apiErrorHandler';

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
            commit('bookActionsFailure', errorMsg);
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
            commit('bookActionsFailure', errorMsg);
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
            commit('bookActionsFailure', errorMsg);
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
            commit('bookActionsFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    deleteBookAction: async function({ commit }, { id }) {
        try {
            const server = instance();
            const url = `/books/${id}`;
            const response = await server.delete(url);
            const { success, message } = response.data;
            return commit('deleteBookSuccess', { bookId: id, success, message });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('bookActionsFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    }
};

export default actions;
