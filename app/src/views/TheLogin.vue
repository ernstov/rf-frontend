<template>
  <div class="login flex justify-center items-center">
    <form @submit.prevent="login()">
      <h1>Login</h1>
        <p v-if="errorMessage" class="error">{{this.errorMessage}}</p>
      <input type="email" placeholder="Email" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <button>Login</button>
      <google-sign-in></google-sign-in>
      <p>
        Don’t have account ? <router-link to="/register">Sign up</router-link>
      </p>
    </form>
  </div>
</template>
<script>
// import ApiService from "@/services/api.service.js"
import GoogleSignIn from "@/components/GoogleSignIn.vue";

export default {
  components: {
    GoogleSignIn,
  },
  data() {
    return {
      email: null,
      password: null,

      // validation data property

      isEmailValid: false,
      isPasswordValid: false,

      emailMessage: null,
      passwordMessage: null,

      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const payloadData = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch("authModule/login", payloadData)
        this.$router.push("program-dashboard");
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  padding: 7rem 0;
  height: 100vh;

  form {
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
      margin-bottom: 6rem;
    }
    .error{
      color: red;
      font-size: 1.4rem;
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
    p {
      font-size: 1.5rem;
      font-family: $font-secondary;
      text-align: center;
      margin: 1rem 0;
      a {
        color: $color-primary;
        font-weight: bold;
      }
    }
  }
}
</style>