import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import books from './book';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        books
    }
});
