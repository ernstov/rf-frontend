<template>
  <div class="login flex justify-center items-center">
    <form action="">
      <h1>Login</h1>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Password" />
      <button>Login</button>
      <p>Don’t have account ? <a href="/">Sign up</a></p>
    </form>
  </div>
</template>

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