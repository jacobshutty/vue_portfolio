// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import vueAxios from 'vue-axios';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueParticles from 'vue-particles';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);
Vue.use(VueParticles);
Vue.use(vueAxios, axios);
Vue.use(Prismic);
Vue.use(PrismicDOM);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
