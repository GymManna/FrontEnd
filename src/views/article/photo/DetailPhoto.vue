<template>
  <div class="container" ref="modal">
      <div div class="close-btn">
        <font-awesome-icon class="fa-3x" @click="$emit('close')" icon="fa-solid fa-xmark" />
      </div>

      <div class="modal">
        <div class="modal-main">
          <div class="modal-img">
            <img src="../../../assets/images/img1.jpeg" alt="오운완 상세이미지">
          </div>

          <div class="modal-board">
            <div class="modal-board-contents">
              <p class="modal-board-contents-title"> </p>
              <p class="modal-board-contents-content"> </p>
            </div>

            <div class="modal-board-comment">
              <div class="modal-board-comment-inner">
                <div class="modal-board-comment-content">
                  <p>백승전</p>
                  <p>와 종국이 형님 진짜 대단하십니다..</p>
                </div>
                <div class="modal-board-comment-content">
                  <p>장진희</p>
                  <p>f45도 같이 해요!</p>
                </div>
              </div>

              <form class="modal-board-comment-input">
                <input type="text" value="" placeholder="댓글 달기..">
                <button type="submit">입력</button>
              </form>
            </div>
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
    background-color: rgba(0, 0, 0, 0.4);

    .close-btn {
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
    }

    .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 80%;
      background-color: #ffffff;

      .modal-main {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .modal-img {
          width: 50%;
          display: flex;
          align-items: center;
          background-color: #000000;
          
          img {
            width: 100%;
          }
        }

        .modal-board {
          width: 50%;
          display: flex;
          flex-direction: column;

          .modal-board-contents {
            height: 40%;
            display: flex;
            flex-direction: column;
            text-align: left;
            background-color: #ffffff;
            z-index: 999;

            .modal-board-contents-title {
              font-size: 18px;
              font-weight: 700;
              margin: 20px 0 5px;
              padding-left: 20px;
              border-bottom: 1px solid #dddddd;
            }

            .modal-board-contents-content {
              height: 100%;
              overflow: auto;
              padding: 0 20px;
              font-size: 14px;
            }
          }

          .modal-board-comment {
            position: relative;
            height: 60%;
            text-align: left;
            padding-left: 20px;
            font-size: 14px;

            .modal-board-comment-inner {
              height: 100%;
              overflow: auto;

              // 댓글 한 줄 한 줄
              .modal-board-comment-content { 
                margin-bottom: 10px;

                p {
                  margin: 0;
                }

                p:nth-of-type(1){
                  font-weight: 700;
                }
              }
            }
            
            .modal-board-comment-input {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 50px;
              display: flex;
              flex-direction: row;
              border-top: 1px solid #999999;
              outline: none;
              background-color: #ffffff;
              z-index: 999;

              input {
                width: 80%;
                border: none;
                outline: none;
              }

              button {
                width: 20%;
                border: none;
                font-size: 14px;
                background-color: #FFDC5D;
              }
            }
          }
        }
      }
    }
  }
</style>