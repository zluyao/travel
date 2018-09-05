// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';// 引入路由文件
import './assets/styles/reset.css'; // 引入默认配置样式文件
import './assets/styles/iconfont.css'; // 引入logo图标
import './assets/styles/border.css'; // 引入1像素边框样式文件
import axios from 'axios'; // 消息请求
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
