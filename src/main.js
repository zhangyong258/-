import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueParticles from 'vue-particles';
Vue.use(VueParticles);

import SvgIcon from './components/SvgIcon.vue';
Vue.component('svg-icon', SvgIcon);

import { PiniaVuePlugin, createPinia } from 'pinia';
Vue.use(PiniaVuePlugin);

import { createPersistedState } from 'pinia-persistedstate-plugin';
const pinia = createPinia();
//开启缓存，存储在localstorage
pinia.use(createPersistedState());

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import './assets/css/global.less';
import './permission';

Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
