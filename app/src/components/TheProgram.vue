<template>
  <div>
    <the-navbar></the-navbar>
    <div class="px-60 py-32">
      <!-- <the-dashboard></the-dashboard> -->
      <asset-explorer></asset-explorer>
    </div>
  </div>
</template>
<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
// import TheDashboard from "@/components/TheDashboard.vue";
import AssetExplorer from "@/components/AssetExplorer.vue";

export default {
  components: {
    TheNavbar,
    // TheDashboard,
    AssetExplorer,
  },
};
</script>
<style lang="scss" scoped>
</style>