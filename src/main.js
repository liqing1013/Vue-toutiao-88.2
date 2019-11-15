import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)// 将elementui定义到全局，任何组件都可使用
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'// 常态基地址
Vue.prototype.$axios = axios// 将axios共享到所有的实例接口调用
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
