// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

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

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info)
}
app.use(createPinia())
app.use(router)

app.mount('#app')
