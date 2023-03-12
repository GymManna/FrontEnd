<template>
  <div class="container">
    <span> E-mail </span> <input type="text" value="cheolsu-official@kakao.com" readonly>
    <span> 이름 </span> <input type="text">
    <span> 닉네임 </span> <input type="text">
  </div>
    <button> 회원가입 </button>
</template>

<script>
  export default {
    name: 'SignUpKakao'
  }
</script>

<style lang="scss" scoped>

  .container {
    display: grid;
    width: 700px;
    height: 180px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: repeat(3, 1fr);

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