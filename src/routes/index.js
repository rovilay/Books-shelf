import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/Home/Home.vue';
import Dash_board from '../components/Dashboard';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import Favourite from '../components/Dashboard/Favourite/Favourite.vue';
import BestSellers from '../components/Dashboard/BestSellers/BestSellers.vue';
import NewReleases from '../components/Dashboard/NewReleases/NewReleases.vue';
import AuthPage from '../components/AuthPage/AuthPage.vue';
import Shelf from '../components/Shelf/Shelf.vue';
import Profile from '../components/Profile/Profile.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/dashboard',
            component: Dash_board,
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'favourite',
                    name: 'Favourite',
                    component: Favourite
                },
                {
                    path: 'best-sellers',
                    name: 'BestSellers',
                    component: BestSellers
                },
                {
                    path: 'new-releases',
                    name: 'NewReleases',
                    component: NewReleases
                },
            ]
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
        {
            path: '/shelf',
            name: 'Shelf',
            component: Shelf
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
    ]
})
 