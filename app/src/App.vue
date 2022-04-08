<template>
  <div class="app">
    <the-navbar v-if="showNavbar"></the-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TokenService from "./services/storage.service";
export default {
  components: {
    TheNavbar,
  },
  async mounted() {
    if (TokenService.getToken()) {
      await this.$store.dispatch("authModule/refreshUser");
    }
  },
  data() {
    return {
      showNavbar: true,
    };
  },
  computed: {},
  watch: {
    $route() {
      this.showNavbar = this.$route.meta.requiresAuth;
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  position: relative;
  background-color: #e5e5e5;
  min-height: 100vh;
}
</style>