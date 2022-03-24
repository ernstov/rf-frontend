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
        const token = googleUser.getAuthResponse();
        console.log(token);
        //     ApiService.post("/auth/google/").then((response) => {
        //       console.log(response);
        //     }).catch((error) => {
        //         console.log(error);
        //     })
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    onGoogleSignInSuccess(resp) {
      const token = resp.Zi.access_token;
      console.log(token);
      // axios
      //   .post("http://localhost:8000/api/v1/auth/google/", {
      //     access_token: token,
      //   })
      //   .then((resp) => {
      //     this.user = resp.data.user;
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //   });
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