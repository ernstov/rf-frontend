import { createStore } from "vuex";
import authModule from "./modules/auth/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    authModule,
  },
  plugins: [createPersistedState()],
});

export default store;
