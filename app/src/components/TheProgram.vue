<template>
  <div>
    <the-navbar></the-navbar>
    <div class="px-60 py-32 h-screen">
      <the-dashboard></the-dashboard>
    </div>
  </div>
</template>
<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheDashboard from "@/components/TheDashboard.vue";

export default {
  components: {
    TheNavbar,
    TheDashboard,
  },
};
</script>
<style lang="scss" scoped>
</style>