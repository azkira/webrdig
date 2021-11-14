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
    component: One
  },
  {
    path: '/modul2',
    name: 'Two',
    component: Two
  },
  {
    path: '/modul3',
    name: 'Three',
    component: Three
  },
  {
    path: '/modul4',
    name: 'Four',
    component: Four
  },
  {
    path: '/modul5',
    name: 'Five',
    component: Five
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
