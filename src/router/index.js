import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ArchitectureView from '../views/ArchitectureView.vue'
// ... existing imports ...
import ProjectsView from '../views/ProjectsView.vue'  // <-- à ajouter
const router = createRouter({
  // Modification cruciale : utilisez createWebHistory() sans argument
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
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
    // {
    //   path: '/articles',
    //   name: 'articles',
    //   component: ArticleView,
    // }
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticleView.vue') // Créez cette vue si nécessaire
    },
    // ... existing routes ...
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/architecture/nexashop',
      name: 'architecture',
      component: ArchitectureView,
    },
    // ... fallback ...
    // Ajoutez une route de fallback pour les 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

// Debugging
router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.path}`)
  next()
})

export default router
