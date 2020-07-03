import Vue from 'vue';
import App from './App';
import moment from 'moment';
import router from './router';
import Api from './api/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$axios = Api;
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
