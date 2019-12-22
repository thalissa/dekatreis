import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Import components here
import IndexComponent from './components/index.vue'
import PF2ToCComponent from './components/tocpf2.vue'
import LoreToCComponent from './components/toclore.vue'
import RuleComponent from './components/rule.vue'
import RaceComponent from './components/race.vue'
import BackgroundComponent from './components/background.vue'
import ClassComponent from './components/class.vue'
import FeatComponent from './components/feats.vue'
import LoreComponent from './components/lore.vue'
import MapComponent from './components/map.vue'

// Routing
const router = new Router({
  mode: 'history',
  routes: [
    // Index (default page)
    {
      path: '/',
      name: 'Index',
      component: IndexComponent
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
      path: '/class/:class',
      name: 'Classes',
      component: ClassComponent
    },
    {
      path: '/feats/:feat',
      name: 'Feats',
      component: FeatComponent
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
