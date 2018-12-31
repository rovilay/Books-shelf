import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/Home/Home.vue';
import Dash_board from '../views/Dashboard';
import Dashboard from '../views/Dashboard/Dashboard.vue';
import Favourite from '../views/Dashboard/Favourite/Favourite.vue';
import BestSellers from '../views/Dashboard/BestSellers/BestSellers.vue';
import NewReleases from '../views/Dashboard/NewReleases/NewReleases.vue';
import AuthPage from '../views/AuthPage/AuthPage.vue';
import NotFound from '../views/NotFoundPage/index.vue';
import Shelf from '../views/Shelf/Shelf.vue';
import Explore from '../views/Explore/Explore.vue';

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
            path: '/explore',
            name: 'Explore',
            component: Explore,
        },
        {
            path: '/not-found',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/not-found',
        }
    ]
});
 