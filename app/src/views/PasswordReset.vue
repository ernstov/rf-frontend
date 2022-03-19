<template>
  <div class="reset-password h-[100vh] flex justify-center items-center">
    <form action="">
      <h1>Reset Password</h1>
      <input type="text" placeholder="Password" />
      <input type="password" name="password" placeholder="Confirm Password" />
      <button>Reset Password</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
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