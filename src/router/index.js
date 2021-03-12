import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio'
import ClubesLista from '../views/ClubesLista'
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
    name: 'ClubesLista',
    component: ClubesLista
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
