<template>
  <div class="app">
    <the-navbar  v-if="showNavbar"></the-navbar>
    <router-view ></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
export default {
  components:{
    TheNavbar,
  },
  data(){
    return {
       showNavbar: true
    }
  },
  watch:{
    $route (){
      this.showNavbar = this.$route.meta.requiresAuth;
    }
  } ,
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  background-color: #e5e5e5;
}
</style>