<template>
  <div class="signup flex justify-center items-center">
    <form action="">
      <h1>Sing Up</h1>
      <p class="para">Create your account easy with less information</p>
      <input type="text" name="name" placeholder="Full Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="confirm-password"
        placeholder="Confirm Password"
      />

      <button>Create Account</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.signup {
  padding: 7rem 0;
  height: 100vh;

  form {
    width: 40rem;
    background-color: $color-white;
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
      height: 4.4rem;
      font-size: 1.5rem;
      font-family: $font-primary-bold;
      font-weight: bold;
      margin: 2rem 0;
      border-radius: 0.5rem;
    }
  }
}
</style>