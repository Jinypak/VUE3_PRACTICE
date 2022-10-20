import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/index'
import { createPinia } from 'pinia'
import './assets/main.css'


createApp(App).use(createPinia()).use(router).mount('#app')
