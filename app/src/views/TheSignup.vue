<template>
  <div class="signup flex justify-center items-center">
    <form @submit.prevent="submitForm()">
      <h1>Sign Up</h1>
      <p class="para">Create your account easy with less information</p>
      <input
        type="text"
        name="name"
        placeholder="Username"
        v-model="username"
        :class="{ 'input-error': isUsernameValid }"
      />
      <p v-if="isUsernameValid" class="validation-error">
        {{ userNameMessage }}
      </p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        :class="{ 'input-error': isEmailValid }"
      />
      <p v-if="emailMessage" class="validation-error">
        {{ emailMessage }}
      </p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        :class="{ 'input-error': isPasswordValid }"
      />
      <p v-if="isPasswordValid" class="validation-error">
        {{ passwordMessage }}
      </p>

      <input
        type="password"
        name="confirm-password"
        placeholder="Confirm Password"
        v-model="confirm_password"
        :class="{ 'input-error': isConfirmPasswordValid }"
      />
      <p v-if="isConfirmPasswordValid" class="validation-error">
        {{ confirmPasswordMessage }}
      </p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Create Account</button>

      <h5
        class="
          text-black-600 text-2xl
          
          flex
          items-center
          justify-center
          my-2
        "
      >
        Already have an account ?
        <router-link to="/login" class="login-link ml-2 font-semibold"
          >Login</router-link
        >
      </h5>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      confirm_password: null,
      error: null,

      //validation data property
      isUsernameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isConfirmPasswordValid: false,

      userNameMessage: "",
      emailMessage: "",
      passwordMessage: "",
      confirmPasswordMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitForm() {
      this.emailMessage = "";
      this.passwordMessage = "";
      this.userNameMessage = "";
      this.confirmPasswordMessage = "";
      try {
        const payloadData = {
          email: this.email,
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
        };
        console.log(payloadData);
        await this.$store
          .dispatch("authModule/signup", payloadData)
          .then(() => {
            this.$router.replace("/login");
          });
      } catch (error) {
        if (error.response.status === 400) {
          for (const key in error.response.data) {
            if (key === "email") {
              this.isEmailValid = true;
              error.response.data[key].forEach((element) => {
                this.emailMessage += `${element} `;
              });
            }
            if (key === "username") {
              this.isUsernameValid = true;
              error.response.data[key].forEach((element) => {
                this.userNameMessage += `${element} `;
              });
            }
            if (key === "password") {
              this.isPasswordValid = true;
              error.response.data[key].forEach((element) => {
                this.passwordMessage += `${element} `;
              });
            }
            if (key === "confirm_password") {
              this.isConfirmPasswordValid = true;
              error.response.data[key].forEach((element) => {
                this.confirmPasswordMessage += `${element} `;
              });
            }
            if (key === "non_field_errors") {
              error.response.data[key].forEach((element) => {
                this.errorMessage += `${element} `;
              });
            }
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.signup {
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
      text-align: left;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.5rem;
      font-family: $font-secondary;
      text-align: left;
      margin-bottom: 3rem;
      margin-top: 0;
      line-height: 2rem;
      opacity: 0.7;
    }
    input {
      width: 100%;
      margin-bottom: 0.5rem;
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
    .input-error {
      border-bottom: 2px solid red;
    }
    .validation-error,
    .error {
      color: red;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    button {
      width: 100%;
      background-color: $color-primary;
      color: $color-white;
      height: 4.4rem;
      font-size: 1.5rem;
      font-family: $font-primary-bold;
      font-weight: bold;
      margin: 2rem 0;
      border-radius: 0.5rem;
    }
    .login-link {
      color: $color-primary;
    }
  }
}
</style>