import Vue from 'vue'
import Main from './components/main.vue'
import router from './router'
import * as Storage from './assets/logic/storage.ts'

Vue.config.devtools = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

new Vue({
  el: '#app',
  router,
  template: '</App>',
  render: h => h(Main)
})
