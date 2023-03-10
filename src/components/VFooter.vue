<template>
  <div class="container">
    &copy; 2023. GYM만나 All rights reserved.

    <div class="info">
      <a href="https://github.com/yunit-s" target="blank">이윤형</a>
      <a href="https://github.com/Jinh222" target="blank">장진희</a>
      <a href="https://github.com/kwonchanmin" target="blank">권찬민</a>
      <a href="https://github.com/BaikSeungJeon" target="blank">백승전</a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .container {
    background-color: #ffffff;
    padding: 30px 0;
    font-size: 18px;

    .info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      padding: 20px 0;

      a {
        color: #2c3e50;
        text-decoration: none;
        padding: 5px;
      }

      a:hover {
        background-color: #FFDC5D;;
      }
    }
  }
</style>