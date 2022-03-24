<template>
  <button @click="handleClickSignIn" class="google-btn">
    <img src="@/assets/images/google.png" alt="" />
    Sign in with Google
  </button>
</template>

<script>
export default {
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const payloadData = {
          token: googleUser.getAuthResponse(),
          email: googleUser.getBasicProfile().getEmail(),
        };
        await this.$store
          .dispatch("authModule/googleLogin", payloadData)
          .then(() => {
            this.$router.push("program-dashboard");
          });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.google-btn {
  background-color: transparent !important;
  border: 0.19rem solid rgba(104, 104, 104, 0.26);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  color: $color-black !important;
  border-radius: 0.5rem;
  img {
    width: 2.5rem;
    height: auto;
    margin-right: 1.5rem;
  }
}
</style>