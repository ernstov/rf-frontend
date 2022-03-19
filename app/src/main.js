import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.css";
import router from "@/router.js";
import ApiService from './services/api.service.js';
// import TokenService from './services/storage.service.js';
import store from './store';
const app = createApp(App);

//Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)


app.use(router);
app.use(store);
app.mount("#app");
