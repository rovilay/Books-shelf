import mutations from './mutations';
import actions from './actions';

const state = {
    user: {
        details: null,
        loggedIn: false
    },
    message: '',
    loading: false,
    success: false,
    errors: null
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
