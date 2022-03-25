import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "@/views/TheLogin.vue";
import TheSignup from "@/views/TheSignup.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import PasswordForgot from "@/views/PasswordForgot.vue";
import AssetExplorer from "@/views/AssetExplorer.vue";
import TheProgram from "@/components/TheProgram.vue";
import AddNewAssets from "@/components/AddNewAssets.vue";
import store from "@/store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: TheLogin,
      name: "Login",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/register",
      component: TheSignup,
      name: "Register",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/password/reset/confirm/",
      component: PasswordReset,
      name: "Password-reset",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/forgot-password",
      component: PasswordForgot,
      name: "Password-forgot",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/program-dashboard",
      component: TheProgram,
      name: "Program-dashboard",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/assets-explorer",
      component: AssetExplorer,
      name: "Assets-explorer",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/assets-explorer/new",
      component: AddNewAssets,
      name: "Add-new-assets",
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      (to.name !== "Login" || to.name !== "Register") &&
      !store.getters["authModule/isAuthenticated"]
    ) {
      next({ name: "Login" });
    } else {
      next();
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (
      (to.name === "Login" || to.name === "Register") &&
      store.getters["authModule/isAuthenticated"]
    ) {
      next({ path: "/Program-dashboard" });
    } else {
      next();
    }
  }
});

export default router;
