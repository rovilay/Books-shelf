import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auths';
import books from './books';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        books
    }
});
