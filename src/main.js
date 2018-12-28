import Vue from 'vue';
import App from './App.vue';
import router from './routes';
// import modalMixin from './Utils/modal-utils';
import { currencyFilter } from './Utils'

Vue.config.productionTip = false;
Vue.filter('currency', currencyFilter);
// Vue.mixin(modalMixin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
