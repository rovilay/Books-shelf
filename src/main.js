import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import { currencyFilter } from './Utils'

Vue.config.productionTip = false;
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
