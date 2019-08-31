import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Import components here
import IndexComponent from './components/index.vue'
import DnD5eToCComponent from './components/toc5e.vue'
import PF2ToCComponent from './components/tocpf2.vue'
import LoreToCComponent from './components/toclore.vue'
import RuleComponent from './components/rule.vue'
import RaceComponent from './components/race.vue'
import BackgroundComponent from './components/background.vue'
import ClassComponent from './components/class.vue'
import LoreComponent from './components/lore.vue'
import MapComponent from './components/map.vue'

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
      path: '/toclore',
      name: 'Dekatreis Lore',
      component: LoreToCComponent
    },
    {
      path: '/rules',
      name: 'Rules',
      component: RuleComponent
    },
    {
      path: '/races',
      name: 'Races',
      component: RaceComponent
    },
    {
      path: '/backgrounds',
      name: 'Backgrounds',
      component: BackgroundComponent
    },
    {
      path: '/classes',
      name: 'Classes',
      component: ClassComponent
    },
    {
      path: '/lore',
      name: 'Lore',
      component: LoreComponent
    },
    {
      path: '/map',
      name: 'Map of Dekatreis',
      component: MapComponent
    }
  ]
})

export default router
