
import App from './views/App.vue'
import { createApp } from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';


const app = createApp(App)

app
 .use(router)
 .use(vuetify)   
 .mount('#app')
