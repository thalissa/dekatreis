import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Import components here
import IndexComponent from './components/index.vue'
import DnD5eToCComponent from './components/toc5e.vue'
import PF2ToCComponent from './components/tocpf2.vue'
import RaceComponent from './components/race.vue'
import RCGComponent from './components/rcg.vue'

// Routing
const router = new Router({
  routes: [
    // Index (default page)
    {
      path: '/',
      name: 'Index',
      component: IndexComponent
    },
    {
      path: '/toc5e',
      name: 'D&D 5e Table of Contents',
      component: DnD5eToCComponent
    },
    {
      path: '/tocpf2',
      name: 'PF2 Table of Contents',
      component: PF2ToCComponent
    },
    {
      path: '/races',
      name: 'Races',
      component: RaceComponent
    },
    {
      path: '/rcg',
      name: 'Random Character Generator',
      component: RCGComponent
    }
  ]
})

export default router
