import Vue from 'vue'
import App from './App.vue'
import content from './content'

Vue.use(content)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
