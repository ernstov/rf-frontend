<template>
  <div class="forgot-password flex justify-center items-center">
    <form @submit.prevent="forgotPassword">
      
      <h1>Forgot Password</h1>
      <input type="email" name="email" placeholder="Email" v-model="email"  :class="{'input-error': emailMessage}" required />
      <p v-if="emailMessage" class="error">{{emailMessage}}</p>
      <button type="submit">Forgot Password</button>
      <p v-if="emailSent" class="email-sent">
        Password reset link has been sent to your email. Verify email to reset password.
      </p>
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      emailMessage: '',
      emailSent: false,
    };
  },
  methods: {
    async forgotPassword() {
      this.emailMessage = '';
      try {
        await this.$store.dispatch("authModule/resetPassword", { email: this.email })
        .then((response)=>{
          console.log(response);
          this.emailSent = true;
        })
      } catch (error) {
        if (error.response.status === 400) {
          for (const key in error.response.data) {
            console.log(key);
            if (key === "email") {
              error.response.data[key].forEach((element) => {
                this.emailMessage += `${element} `;
              });
            }
            else {
              // console.log('Working...');
                this.emailMessage+= `User with this email does not exist`
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password {
  text-align: center;
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
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      // margin-bottom: 2rem;
      height: 4rem;
      padding: 1.5rem 0;
      font-size: 1.5rem;
      font-family: $font-secondary;
      border-bottom: 0.24rem solid rgba(128, 128, 128, 0.397);
      outline: none;
    }
    .input-error {
      border-bottom: 2px solid red;
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
      margin: 3rem 0;
      border-radius: 0.5rem;
    }
    .error{
      color: red;
      font-size: 1.3rem;
      text-align: left;
    }
  }
  .email-sent{
    font-size: 1.3rem;
    color: green;
  }
}
</style>