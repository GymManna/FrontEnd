<template>
  <div class="container">
    <div class="box">
      <a href="joinedgathering"> <button> 참여 중인 만나 </button> </a>
      <a href="mycommgathering"> <button> 내 만나 댓글 </button> </a>
      <a href="mycommphoto"> <button> 내 오운완 댓글 </button> </a>
      <a href="editmyinfo"> <button> 회원 정보 수정 </button> </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyPageMenu'
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 20px;
    padding: 20px 0;
    
    background-color: #ffffff;

    .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

      button {
      width: 200px;
      height: 60px;
      border: none;
      background-color: #e9e9e9;
      cursor: pointer;
      font-size: 18px;
      }
    }
  }
</style>