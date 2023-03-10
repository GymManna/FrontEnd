<template>
  <div class="container">
    <span> E-mail </span> <input type="text">
    <span> Password </span> <input type="text">
  </div>
    <button> 로그인 </button>
</template>

<script>
  export default {
    name: 'SignInEmail'
  }
</script>

<style lang="scss" scoped>

  .container {
    display: grid;
    width: 700px;
    height: 120px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: repeat(2, 1fr);

    column-gap: 10px;
    row-gap: 10px;
    margin-bottom: 20px;
    padding: 20px 0;
    
    background-color: #ffffff;

    span {
        text-align: right;
        background-color: #FFDC5D;
        font-size: 18px;
        
    }

  }
</style>