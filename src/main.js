import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/plugins/ant_design.js';

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
