import server from '../../../server.config';
import { decodeToken } from '../../Utils/token';
import router from '../../routes';
import toast from '../../Utils/toasts';
import apiErrorHandler from '../../Utils/apiErrorHandler';

const actions = {
    signUserIn: async function({ commit }, 
        { firstname, lastname, email, password }) {
        try {
            commit('postUser');

            const response = await server.post(
                '/signup', { firstname, lastname, email, password }
            );
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

            const response = await server().post('/login', { email, password });
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

export default actions;
