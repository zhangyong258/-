import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles';
import ElementUI from 'element-ui';
import SvgIcon from './components/SvgIcon.vue';
import 'element-ui/lib/theme-chalk/index.css';
import './permission';
import './assets/css/global.less';

Vue.component('svg-icon', SvgIcon);

Vue.use(VueParticles);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
