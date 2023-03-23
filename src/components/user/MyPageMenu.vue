<template>
  <div class="container">
    <div class="box">
      <button @click="this.$moveTo('/mypage/joinedgathering')">참여 중인 만나</button>
      <button @click="this.$moveTo('/mypage/mycommgathering')">내 만나 댓글</button>
      <button @click="this.$moveTo('/mypage/mycommphoto')">내 오운완 댓글</button>
      <button @click="this.$moveTo('/mypage/editmyinfo')">회원 정보 수정</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.container {
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    button {
      width: 200px;
      height: 60px;
      border: none;
      background-color: #FFDC5D;
      cursor: pointer;
      font-size: 18px;
    }

    button:hover {
      background-color: #ffce1d;
    }
  }
}
</style>