import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {path:"/",component:Index},
  {path: "/home",component: Home},
]

const router = new VueRouter({
  routes
})

export default router
