import Vue from 'vue'
import VueMarkdown from 'vue-markdown'

import Main from './components/main.vue'
import router from './router'

Vue.config.devtools = true

// Don't need this yet, but can be used for markdown later.
// Vue.component('display', VueMarkdown);

new Vue({
  el: '#app',
  router,
  template: '</App>',
  render: h => h(Main)
})
