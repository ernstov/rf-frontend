<template>
  <button @click="handleClickSignIn">Google sign in</button>
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