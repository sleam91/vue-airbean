import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing'
import Cart from '@/views/Cart'
import Menu from '@/views/Menu'
import Profile from '@/views/Profile'
import Status from '@/views/Status'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    children: [{
      path: 'cart',
      name: 'Cart',
      component: Cart
    }]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
