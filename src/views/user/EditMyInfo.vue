<template>
  <div class="container">
    <my-page-menu />

    <div class="box">
      <div class="userdata">
        <span> E-mail </span> <input type="text" value="cheolsu-official@kakao.com" readonly>
        <span> 이름 </span> <input type="text" value="철수">
        <span> Password </span> <input type="password">
        <span> Password 확인 </span> <input type="password">
      </div>
      <button> 수정완료 </button>
      <button> 회원탈퇴 </button>
    </div>
  </div>
</template>

<script>
import MyPageMenu from './MyPageMenu.vue';

  export default {
  components: { MyPageMenu },
    name: 'EditMyInfo'
  }
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    width: flex;
    grid-template-columns: 200px auto;
    // grid-template-rows: repeat(5, 1fr);
    
    background-color: lightyellow;
    gap: 10px;

    .box {
      justify-self: center; // 가로 위치 가운데정렬
      align-self: center; // 세로 위치 가운데정렬
      background-color: lightgrey;

      .userdata {
        display: grid;
        width: 500px;
        height: 240px;
        grid-template-columns: 2fr 5fr;
        grid-template-rows: repeat(4, 1fr);
        
        background-color: lightcyan;
        gap: 10px;
      }
    }
  }
</style>