<template>
  <div>
    <VHeader v-if="!IsSignIn && !IsSignUp && !IsSignUpKakao && !IsSignInEmail" />
    <router-view />
    <VFooter v-if="!IsSignIn && !IsSignUp && !IsSignUpKakao && !IsSignInEmail" />
  </div>
</template>

<script>
import VHeader from "./components/layout/VHeader.vue";
import VFooter from "./components/layout/VFooter.vue";

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
  },
  computed: {
    IsSignIn(){
      return this.$route.name == "SignIn"
    },
    IsSignInEmail(){
      return this.$route.name == "SignInEmail"
    },
    IsSignUp(){
      return this.$route.name == "SignUp"
    },
    IsSignUpKakao(){
      return this.$route.name == "SignUpKakao"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 1080px;
  margin: 0 auto;
  padding: 0;
}
</style>
