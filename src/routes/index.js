import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/Home/Home.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import AuthPage from '../components/AuthPage/AuthPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'Login',
            component: AuthPage
        },
        {
            path: '/signup',
            name: 'Signup',
            component: AuthPage
        },
    ]
})
 