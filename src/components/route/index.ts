import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/home/index.vue'
import About from '../page/about/index.vue'
import Galery from '../page/galery/index.vue'
import Seaceh from '../page/search/index.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: About },
  { path: '/galery', name: 'galery', component: Galery },
  { path: '/search', name: 'search', component: Seaceh },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'vue-school-active-link',
  routes,
})



export default router