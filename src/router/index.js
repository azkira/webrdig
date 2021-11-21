import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Schedule from '../views/Schedule.vue'
import Teams from '../views/Teams.vue'
import Recent from '../views/Recent.vue'
import One from '../views/modules/One.vue'
import Two from '../views/modules/Two.vue'
import Three from '../views/modules/Three.vue'
import Four from '../views/modules/Four.vue'
import Five from '../views/modules/Five.vue'
import And from '../views/modules/percobaan/dasarRdig/And.vue'
import Or from '../views/modules/percobaan/dasarRdig/Or.vue'
import Nand from '../views/modules/percobaan/dasarRdig/Nand.vue' // percobaan 4 modul 1
import Nor from '../views/modules/percobaan/dasarRdig/Nor.vue' // percobaan 5 modul 1

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/recent',
    name: 'Recent',
    component: Recent
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/modul1',
    name: 'One',
    component: One,
    meta: { hideHome: true, navMod1: true }
  },
  {
    path: '/modul1/percobaan1',
    name: 'And',
    component: And,
    meta: { hideHome: true, navMod1: true }
  },
  {
    path: '/modul1/percobaan2',
    name: 'Or',
    component: Or,
    meta: { hideHome: true, navMod1: true }
  },
  {
    path: '/modul1/percobaan4',
    name: 'Nand',
    component: Nand,
    meta: { hideHome: true, navMod1: true }
  },
  {
    path: '/modul1/percobaan5',
    name: 'Nor',
    component: Nor,
    meta: { hideHome: true, navMod1: true }
  },
  {
    path: '/modul2',
    name: 'Two',
    component: Two,
    meta: { hideHome: true, navMod2: true }
  },
  {
    path: '/modul3',
    name: 'Three',
    component: Three,
    meta: { hideHome: true, navMod3: true}
  },
  {
    path: '/modul4',
    name: 'Four',
    component: Four,
    meta: { hideHome: true, navMod4: true }
  },
  {
    path: '/modul5',
    name: 'Five',
    component: Five,
    meta: { hideHome: true, navMod5: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
