<template>
  <div class="container">
      <div class="modal">
        <div class="modal-img">
          <img src="../../../assets/images/img1.jpeg" alt="오운완 상세이미지">
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
            <ul class="modal-board-comment-content">
              <li>와 개쩌네요</li>
              <li>와 쩔어요</li>
              <li>김종국 짱</li>
            </ul>
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
    name: 'DetailPhoto',
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);

    .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      background-color: #ffffff;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .modal-img {
        width: 50%;
        background-color: #000000;

        img {
          width: 100%;
        }
      }
      .modal-board {
        width: 50%;


        
      }
    }
  }
</style>