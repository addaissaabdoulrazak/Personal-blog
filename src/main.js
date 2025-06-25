// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'
// import './assets/style.css'
// import '@fortawesome/fontawesome-free/css/all.css'

// const app = createApp(App)

// app.config.errorHandler = (err, vm, info) => {
//   console.error('Vue error:', err, info)
// }
// app.use(createPinia())
// app.use(router)

// app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

// Debugging
console.log('Starting Vue app initialization...')

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info)
}

app.use(createPinia())
app.use(router)

// Méthode de montage robuste
const mountApp = () => {
  try {
    app.mount('#app')
    console.log('Vue app successfully mounted!')

    // Vérification du DOM
    const appElement = document.getElementById('app')
    if (!appElement) {
      console.error('#app element not found after mount!')
    }
  } catch (error) {
    console.error('App mount error:', error)
  }
}

router.isReady().then(() => {
  console.log('Router is ready')
  mountApp()
}).catch(error => {
  console.error('Router error:', error)
  mountApp() // Tentez de monter quand même
})
