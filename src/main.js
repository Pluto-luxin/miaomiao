import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
//引入axios库
import axios from 'axios'
Vue.prototype.axios=axios;

//设置全局过滤器，第一个参数是可以设置正在热映中图片的宽高
// Vue.filter('setWH',(url,arg)=>{
//   return url.replace(/w\.h/,arg)
// })
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

//引入下拉刷新组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
