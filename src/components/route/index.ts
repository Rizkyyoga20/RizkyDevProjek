import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/index.vue'
import MenusApp from '../page/service/munusApp/index.vue'
//import About from '../page/about/index.vue'
//import Galery from '../page/galery/index.vue'
//import Seaceh from '../page/search/index.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/MenusApp', name: 'menusApp', component: MenusApp },
  //{ path: '/galery', name: 'galery', component: Galery },
  //{ path: '/search', name: 'search', component: Seaceh },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'vue-school-active-link',
  routes,
})



export default router