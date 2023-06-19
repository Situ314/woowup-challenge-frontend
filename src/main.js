import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './axios.js'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import Notifications from '@kyvg/vue3-notification'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Notifications)

app.mount('#app')
