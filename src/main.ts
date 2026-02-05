import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router/router'

const app = createApp(App)

AOS.init()
app.use(router)
app.mount('#app')