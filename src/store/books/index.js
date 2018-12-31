import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    books: [],
    newBook: {
        title: '',
        price: '',
        isbn: '',
        image: '',
        image_name: '',
    },
    postingBook: false,
    message: '',
    loading: false,
    success: false,
    errors: null,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
