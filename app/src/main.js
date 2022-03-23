import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.css";
import router from "@/router.js";
import ApiService from './services/api.service.js';
import store from './store';
import gAuthPlugin from 'vue3-google-oauth2';

const app = createApp(App);
const gauthClientId = process.env.VUE_APP_GOOGLE_CLIENT_ID
console.log(gauthClientId);
console.log(process.env.VUE_APP_ROOT_API);

//Set the base URL of the API

ApiService.init(process.env.VUE_APP_ROOT_API)



app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false });
app.use(router);
app.use(store);
app.mount("#app");
