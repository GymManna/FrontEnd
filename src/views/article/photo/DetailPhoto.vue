<template>
  <div class="container">
      <div class="modal">
        <div class="modal-img">
          <img src="../../../assets/images/img1.jpeg" alt="">
        </div>

        <div class="modal-board">
          <div class="modal-board-contents">
            <p class="modal-board-contents-title">
              김종국입니다.
            </p>
            <p class="modal-board-contents-content">
              오운완 ㅋ
            </p>
          </div>
          <div class="modal-board-comment">
            <div class="modal-board-comment-content">

            </div>
            <form class="modal-board-comment-input">
              <input type="text" value="" placeholder="댓글 달기..">
              <button type="submit">입력</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "DetailPhoto"
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);

    .modal {
      width: 90%;
      background-color: #ffffff;
    }
  }
</style>