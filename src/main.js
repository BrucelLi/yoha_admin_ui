// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 加载ui组件样式和注册部分全局组件
import {Loading, Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$loading = Loading;
Vue.prototype.$message = Message;

// 引入公共样式
import '@/assets/css/common.styl';

// 加载配置文件
import config from './config';

// 将辅助函数设置为全局
import mixins from './mixins'
Vue.mixin(mixins);

// 加载http全局
import * as http from './api/http';
Vue.prototype.$http = http;

// 路由前置
let loadingObj;
router.beforeEach((to, from, next) => {
    to.matched.some((record, index, arr) => {
        if (index === arr.length - 1) {
            document.title = record.meta.title ? record.meta.title : config.webTitle
        }
    })
    let $vue = new Vue();
    loadingObj = $vue.$loading.service();
    next()
});
// 路由后置
router.afterEach((to, from, next) => {
    setTimeout(function(){
        loadingObj.close();
    }, 500)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
