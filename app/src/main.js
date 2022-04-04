import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import router from '@/router.js'
import ApiService from './services/api.service.js'
import store from './store'
import gAuthPlugin from 'vue3-google-oauth2'
import vSelect from 'vue-select'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'vue-select/dist/vue-select.css'

const app = createApp(App)
const gauthClientId = process.env.VUE_APP_GOOGLE_CLIENT_ID

//Set the base URL of the API

ApiService.init(process.env.VUE_APP_ROOT_API)

app.component('v-select', vSelect)
app.use(Toast, {
	transition: 'Vue-Toastification__fade',
	maxToasts: 20,
	newestOnTop: true,
	shareAppContext: true,
})
app.use(gAuthPlugin, {
	clientId: gauthClientId,
	scope: 'email',
	prompt: 'consent',
	fetch_basic_profile: false,
})
app.use(router)
app.use(store)
app.mount('#app')
