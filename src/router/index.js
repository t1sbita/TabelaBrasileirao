import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio'
import ListaClubes from '../views/ListaClubes'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/classificacao',
    name: 'ListaClubes',
    component: ListaClubes
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  
]

const router = new VueRouter({
  routes
})

export default router
