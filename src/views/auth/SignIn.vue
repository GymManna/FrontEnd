<template>
  <div class="container">
    <button class="signin-kakao"> Sign in via kakao </button>
    <router-link to="signinemail"> <button class="signin-email"> Sign in via E-mail </button> </router-link>
    <router-link to="signup"> <button class="signup"> Sign up </button> </router-link>
  </div>
</template>

<script>
  export default {
    name: 'SignIn'
  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    padding: 20px 0;
    
    background-color: #ffffff;

    .signin-kakao {
        width: 300px;
        height: 60px;
        border: none;
        background-color: #FFDC5D;
        cursor: pointer;
        font-size: 18px;

    }
    .signin-email {

        width: 300px;
        height: 60px;
        border: none;
        background-color: #D9D9D9;
        cursor: pointer;
        font-size: 18px;
    }
    .signup {

        width: 300px;
        height: 60px;
        border: none;
        background-color: #FFC329;
        cursor: pointer;
        font-size: 18px;
    }

  }
</style>