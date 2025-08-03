import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
  theme: 'light',
  hideProgressBar: false,
  closeButton: true,
  transition: 'slide'
})

app.use(pinia)
app.use(router)
app.use(i18n)

// Récupérer la langue sauvegardée
const savedLang = localStorage.getItem('userLanguage') || 'fr'

// Synchroniser i18n et Pinia au démarrage
app.config.globalProperties.$i18n.locale = savedLang

// Initialiser le store avec la langue
import { useArticleStore } from '@/stores/articleStore'
const articleStore = useArticleStore()
articleStore.setLanguage(savedLang)

app.mount('#app')
