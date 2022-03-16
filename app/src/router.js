import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "@/views/TheLogin.vue";
import TheSignup from "@/views/TheSignup.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import PasswordForgot from "@/views/PasswordForgot.vue";
import TheProgram from "@/components/TheProgram.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: TheLogin, name: "Login" },
    { path: "/register", component: TheSignup, name: "Register" },
    {
      path: "/reset-password",
      component: PasswordReset,
      name: "Password-reset",
    },
    {
      path: "/forgot-password",
      component: PasswordForgot,
      name: "Password-forgot",
    },
    {
      path: "/program-dashboard",
      component: TheProgram,
      name: "Program-dashboard",
    },
  ],
});

export default router;
