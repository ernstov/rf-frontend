<template>
  <div class="login flex justify-center items-center">
    <div class="form">
      <h1>Login</h1>
      <p v-if="errorMessage" class="error">{{ this.errorMessage }}</p>
      <input
        class="mb-8"
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <button class="forgot-btn" @click.prevent="forgotPassword">
        Forgot Password?
      </button>
      <button class="login-btn" @click="login">Login</button>
      <google-sign-in
        class="login-btn"
        @showLoading="setLoading"
      ></google-sign-in>
      <p>
        Don’t have account ? <router-link to="/register">Sign up</router-link>
      </p>
    </div>
    <div
      v-if="isLoading"
      wire:loading
      class="
        fixed
        top-0
        left-0
        right-0
        bottom-0
        w-full
        h-screen
        z-50
        overflow-hidden
        bg-gray-700
        opacity-75
        flex flex-col
        items-center
        justify-center
      "
    >
      <div
        class="
          loader
          ease-linear
          rounded-full
          border-4 border-t-4 border-gray-200
          h-20
          w-20
          mb-4
        "
      ></div>
      <h2 class="text-center text-white text-xl text-5xl font-medium mt-4">
        Please wait
      </h2>
    </div>
  </div>
</template>
<script>
import GoogleSignIn from "@/components/GoogleSignIn.vue";

export default {
  components: {
    GoogleSignIn,
  },
  data() {
    return {
      email: null,
      password: null,
      isLoading: false,

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
        await this.$store
          .dispatch("authModule/login", payloadData)
          .then(() => {
            this.$router.push("program-dashboard");
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.errorMessage = error.response.data.detail;
            }
          });
      } catch (error) {
        console.log("Try Catch");
        return error;
      }
    },
    forgotPassword() {
      this.$router.push("/forgot-password");
    },
    setLoading(value) {
      this.isLoading = value;
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  padding: 7rem 0;
  height: 100vh;
  text-align: center;

  .form {
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
    .error {
      color: red;
      font-size: 1.4rem;
    }
    input {
      width: 100%;
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
    .login-btn {
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
      text-align: center;
      margin: 1rem 0;
      a {
        color: $color-primary;
        font-weight: bold;
      }
    }
    .forgot-btn {
      font-size: 1.4rem;
      width: 100%;
      text-align: right;

      margin: 1rem 0;
    }
  }
  .loader {
    border-top-color: $color-primary;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>