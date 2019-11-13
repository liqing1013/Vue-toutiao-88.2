import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 下载安装element-ui
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)// 将elementui定义到全局，任何组件都可使用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
