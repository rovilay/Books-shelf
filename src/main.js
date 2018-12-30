import Vue from 'vue';
import App from './App.vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import router from './routes';
import store from './store';
import { currencyFilter } from './Utils';


Vue.use(VueToast);

Vue.config.productionTip = false;
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
