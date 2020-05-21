import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

const echarts = require('echarts/lib/echarts')
Vue.prototype.$echarts = echarts

import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
import hubei from 'echarts/map/json/province/hubei.json'
echarts.registerMap('hubei', hubei)

import axios from 'axios'
import VueAxios from 'vue-axios'
// import BaiduMap from 'vue-baidu-map'

Vue.use(VueAxios, axios)
// Vue.use(BaiduMap, { ak: '4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa' })

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
