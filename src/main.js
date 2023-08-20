import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router/router'

createApp(App)
    .use(Router)
    .mount('#app')
