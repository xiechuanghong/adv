// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

import moment from 'moment'
import remConfig from './utils/flexible.js'
// import Vuex from 'vuex';

import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './utils/reset.css'             //样式重置
import store from './store'           //引入store

// 引入所有过滤器
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Mint);

Vue.prototype.$moment = moment;
Vue.prototype.$global = { openId: 'wx', imgArr: [] };

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

remConfig(750, 750)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
