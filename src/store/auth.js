/* eslint no-console: 0 */
import server from '../../server.config';
import { decodeToken } from '../Utils/token';
import router from '../routes';
import toast from '../Utils/toasts';
import apiErrorHandler from '../Utils/apiErrorHandler';


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

const mutations = {
    postUser: function(state) {
        state.loading = true;
    },
    postUserSuccess: function(state, response) {
        const { userDetails, success, message } = response;

        state.user.details = userDetails;
        state.success = success;
        state.message = message;
        state.user.loggedIn = true;
        state.loading = false;
        state.errors = null;
    },
    postUserFailure: function(state, error) {
        state.errors = error;
        state.loading = false;
        state.success = false;
        state.message = ''
    },
    logOutUser: function(state) {
        state.user = {
            details: null,
            loggedIn: false
        };
        state.message = '';
        state.loading = false;
        state.success = false;
        state.errors = null;
    }
};

const actions = {
    signUserIn: async function({ commit }, 
        { firstname, lastname, email, password }) {
        try {
            commit('postUser');

            const response = await server.post(
                '/signup', { firstname, lastname, email, password }
            );
            console.log('here');
            const { token, message, success } = response.data;
            localStorage.setItem('bs-token', token);
            const userDetails = decodeToken();
            
            commit('postUserSuccess', {userDetails, message, success});
            return router.push({ name: 'Dashboard' });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('postUserFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    logUserIn: async function({ commit }, { email, password }) {
        try {
            commit('postUser');

            const response = await server.post('/login', { email, password });
            const { token, message, success } = response.data;
            localStorage.setItem('bs-token', token);
            const userDetails = decodeToken();

            commit('postUserSuccess', {userDetails, message, success});
            return router.push({ name: 'Dashboard' });
        } catch (error) {
            const errorMsg = apiErrorHandler(error);
            commit('postUserFailure', errorMsg);
            toast(errorMsg, 'error');
        }
    },
    logUserOut: function({ commit }) {
        commit('logOutUser');
    }
};



export default {
    namespaced: true,
    state,
    mutations,
    actions
}