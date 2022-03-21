<template>
  <div class="reset-password h-[100vh] flex justify-center items-center">
    <div>
      <h1>Reset Password</h1>
      <input type="text" placeholder="Password" v-model="newPassword" />
      <input
        type="password"
        name="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <button @click="resetPassword">Reset Password</button>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/api.service.js";

export default {
  data() {
    return {
      newPassword: null,
      confirmPassword: null,
    };
  },
  methods: {
    resetPassword() {
      try {
        const uid = this.$route.query["uid"];
        const token = this.$route.query["token"];

        if (this.newPassword === this.confirmPassword) {
          const requestObject = {
            uid: uid,
            token: token,
            new_password: this.newPassword,
          };

          ApiService.post("auth/users/reset_password_confirm/", requestObject)
            .then((response) => {
              if (response.status === 201) {
                this.$route.push({ path: "/login" });
              }
            })
            .catch((error) => {
              return error;
            });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  padding: 7rem 0;
  height: 100vh;
  div {
    width: 40rem;
    background-color: $color-white;
    padding: 3rem;
    padding-top: 6rem;
    border-radius: 1rem;
    h1 {
      font-size: 3rem;
      font-family: $font-secondary;
      font-weight: bold;
      text-align: center;
      margin-bottom: 4rem;
    }
    input {
      width: 100%;
      margin-bottom: 2rem;
      height: 4rem;
      padding: 1.5rem 0;
      font-size: 1.5rem;
      font-family: $font-secondary;
      border-bottom: 0.24rem solid rgba(128, 128, 128, 0.397);
      outline: none;
    }
    input::placeholder {
      opacity: 0.7;
    }
    button {
      width: 100%;
      background-color: $color-primary;
      color: $color-white;
      height: 4.3rem;
      font-size: 1.6rem;
      font-family: $font-primary-bold;
      font-weight: bold;
      margin: 2rem 0;
      border-radius: 0.5rem;
    }
  }
}
</style>