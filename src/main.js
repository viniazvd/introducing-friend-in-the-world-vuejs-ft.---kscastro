import Vue from 'vue'
import App from './App.vue'

import feather from 'vue-icon'
Vue.use(feather, 'v-icon')

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
