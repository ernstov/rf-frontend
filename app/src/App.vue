<template>
  <div class="app">
    <the-navbar v-if="showNavbar"></the-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      showNavbar: true,
    };
  },
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