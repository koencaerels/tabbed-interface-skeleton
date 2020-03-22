import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueTabsChrome from 'vue-tabs-chrome';

import 'element-ui/lib/theme-chalk/index.css';

import store from './store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueTabsChrome);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
