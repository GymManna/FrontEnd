<template>
  <div class="container" ref="modal">
      <div div class="close-btn">
        <router-link to="/photo" >
          <font-awesome-icon class="fa-3x" icon="fa-solid fa-xmark" />
        </router-link>
      </div>

      <div class="modal">
        <div class="modal-main">
          <div class="modal-img">
            <!-- <img :src="image.articleImgurl" @error="setErrorImage" :alt="image.articlePnum + 1 + '번 이미지'"> -->
          </div>

          <div class="modal-board">
            <div class="modal-board-contents">
              <p class="modal-board-contents-title"> 하이 </p>
              <p class="modal-board-contents-content"> 하이 </p>
            </div>

            <div class="modal-board-comment">
              <div  class="modal-board-comment-inner">
                <div v-for="comment in commentData" :key="comment.commentPnum" class="modal-board-comment-content">
                  <p>{{ comment.userNickname }}</p>
                  <p>{{ comment.commentPcontent }}</p>
                </div>
              </div>

              <form @submit="createComment" class="modal-board-comment-input">
                <input type="text" v-model="comment" placeholder="댓글 달기..">
                <button type="submit">입력</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  const baseUrl = process.env.VUE_APP_API_URL;

  export default {
    name: 'DetailPhoto',
    data(){
      return {
        errorImage: require('@/assets/images/errorImage.png'),
        articlePnum: this.$route.params.articlePnum,
        commentData: [],
        comment: ''
      }
    },
    methods: {
      // [디폴트 이미지]
      setErrorImage(event){
        event.target.src = this.errorImage;
      },
      // [댓글 불러오기]
      getComment(){
        this.$axios.get(
          `${baseUrl}/article/photo/${this.articlePnum}/comment/`
        ).then(res => {
          this.commentData = res.data;
        }).catch(err => {
          console.log("[DetailPhoto 1] ", err);
        })
      },
      // [댓글 작성]
      createComment(){
        event.preventDefault();
        
        const articlePnum = this.articlePnum;
        const formData = new FormData();
        formData.append("articlePnum", this.articlePnum);
        formData.append("userNickname", '관리자');
        formData.append("commentPcontent", this.comment);

        // [POST]
        this.$axios.post(
          `${baseUrl}/article/photo/${articlePnum}/comment/`, formData

          // 성공 시
        ).then(() => {
          
          this.getComment(); // [GET] 함수 실행
          this.comment = ''; // 입력창 초기화

          // 실패 시
        }).catch(err => {
          console.log("[DetailPhoto 2] ", err);
        })
      }
    },
    mounted(){
      this.getComment();
    }
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
              font-size: 18px;
            }
          }

          .modal-board-comment {
            position: relative;
            height: 60%;
            text-align: left;
            padding-left: 20px;
            font-size: 18px;

            .modal-board-comment-inner {
              height: 90%;
              overflow: auto;

              // 댓글 한 줄 한 줄
              .modal-board-comment-content { 
                margin-bottom: 10px;
                border-bottom: 1px solid #ddd;
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
                font-size: 18px;
                background-color: #FFDC5D;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
</style>