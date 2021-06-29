import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).mount('#app')
App.use(createPinia())
