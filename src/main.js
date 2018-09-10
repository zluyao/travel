// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';// 引入路由文件
import store from './store'; // 引入状态管理文件
import './assets/styles/reset.css'; // 引入默认配置样式文件
import './assets/styles/iconfont.css'; // 引入logo图标
import './assets/styles/border.css'; // 引入1像素边框样式文件
import axios from 'axios'; // 消息请求
import Vuex from 'vuex'; // 状态管理
import fastclick from 'fastclick'; // 引入fastclick，解决click300ms延迟
fastclick.attach(document.body);
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
