import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import HomeView from '@/views/HomeView.vue';
import ArticleView from '@/views/ArticleView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: ArticleView,
      props: true,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleView,
    },
  ],
  scrollBehavior(to) {
    // Comportement de défilement pour les ancres
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
