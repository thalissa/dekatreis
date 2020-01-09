import Vue from 'vue'
import VueMarkdown from 'vue-markdown'

import Main from './components/main.vue'
import router from './router'

Vue.config.devtools = true

Vue.component('display', VueMarkdown);

new Vue({
  el: '#app',
  router,
  template: '</App>',
  render: h => h(Main)
})
