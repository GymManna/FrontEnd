<template>
  <div>
    <VHeader />
    App.vue 페이지
    <VFooter />
  </div>
</template>

<script>
import VHeader from "./components/VHeader.vue";
import VFooter from "./components/VFooter.vue";

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
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
