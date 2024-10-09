import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist  from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'


const app = createApp(App)

app.use(router)
app.use(Toast);
app.use(createPinia().use(piniaPersist))

app.mount('#app')
