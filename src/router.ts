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
import EquipmentComponent from './components/equipment.vue'
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
      path: '/rule/:rule',
      name: 'Rules',
      component: RuleComponent
    },
    {
      path: '/race/:race',
      name: 'Races',
      component: RaceComponent
    },
    {
      path: '/background/:background',
      name: 'Backgrounds',
      component: BackgroundComponent
    },
    {
      path: '/class/:class',
      name: 'Classes',
      component: ClassComponent
    },
    {
      path: '/feat/:feat',
      name: 'Feats',
      component: FeatComponent
    },
    {
      path: '/lore/:lore',
      name: 'Lore',
      component: LoreComponent
    },
    {
      path: '/equipment/:itemset',
      name: 'Equipment',
      component: EquipmentComponent
    },
    {
      path: '/map',
      name: 'Map of Dekatreis',
      component: MapComponent
    }
  ]
})

export default router
