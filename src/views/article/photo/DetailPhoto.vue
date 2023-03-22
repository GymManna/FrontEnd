<template>
  <div class="container" ref="modal">
      <div div class="close-btn">
        <router-link to="/photo" >
          <font-awesome-icon class="fa-3x" icon="fa-solid fa-xmark" />
        </router-link>
      </div>

      <div class="modal">
        <div class="modal-main">
          <div v-if="this.articleData[0]" class="modal-img">
            <img :src="this.articleData[0].articleImgurl" @error="setErrorImage" :alt="this.articleData[0].articlePnum + 1 + '번 이미지'">
          </div>

          <div class="modal-board">
            <div v-if="this.articleData[0]" class="modal-board-contents">
              <div class="contents-top">
                <p class="modal-board-contents-title"> {{ this.articleData[0].articlePtitle }} </p>
                <p @click="deleteArticle">삭제</p>
              </div>
              <div class="contents-btm">
                <p class="modal-board-contents-content"> {{ this.articleData[0].articlePcontent }} </p>
              </div>
            </div>

            <div class="modal-board-comment">
              <h3>댓글 수 ({{ this.commentLen }})</h3>
              <div  class="modal-board-comment-inner">
                <div v-for="(comment, i) in commentData" :key="comment.commentPnum" class="comment">
                  <div v-if="!comment.isEditMode" class="comment-text">
                    <p>{{ comment.userNickname }}</p>
                    <p>{{ comment.commentPcontent }}</p>
                  </div>
                  <div v-else class="comment-edit">
                    <p>{{ comment.userNickname }}</p>
                    <form @submit="updateComment(comment.commentPnum)">
                      <input type="text" v-model="editedComment" placeholder="수정할 텍스트 입력..">
                      <button type="submit" style="display:none"></button>
                    </form>
                  </div>
                  <div class="comment-icons">
                    <font-awesome-icon @click="deleteComment(comment.commentPnum)" class="fa-x" icon="fa-solid fa-xmark" />
                    <font-awesome-icon @click="toggleEditMode(i)" class="fa-x" icon="fa-solid fa-pen" />
                  </div>
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
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용
  const baseUrl = process.env.VUE_APP_API_URL;

  export default {
    name: 'DetailPhoto',
    data(){
      return {
        errorImage: require('@/assets/images/errorImage.png'),
        articlePnum: this.$route.params.articlePnum,
        articleData: [],
        commentData: [],
        comment: '',
        commentLen: 0,
        isEditMode: false,
        editedComment: '',
        commentAuthor: ""
      }
    },
    mounted(){
      this.getArticle(); // [GET] 게시글 
      this.getComment(); // [GET] 댓글
      this.commentAuthor = this.getVuexId;
    },
    computed: {
      ...mapGetters(["getVuexId"]), // Vuex-getters 활용
    },
    methods: {
      // [Vuex-actions]
      ...mapActions([
        "setVuexId"
      ]),

      // [디폴트 이미지]
      setErrorImage(event){
        event.target.src = this.errorImage;
      },

      // [게시글 불러오기]
      getArticle(){
        this.$axios.get(
          `${baseUrl}/article/photo/${this.articlePnum}`
        ).then(res => {
          this.articleData = res.data;
          console.log(this.articleData[0].articleImgurl);
        }).catch(err => {
          console.log("[ArticlePhoto GET ARTICLE] ", err)
        })
      },

      // [게시글 삭제]
      deleteArticle(){
        this.$axios.delete(`${baseUrl}/article/photo/${this.articlePnum}/`, {
        }).then(() => {
          alert("[Delete Successful]");

          this.$router.push({
            name: 'ArticlePhoto'
          });
        }).catch(err => {
          console.log("[DetailPhoto DELETE ARTICLE] ", err);
        })
      },

      // [댓글 불러오기]
      getComment(){
        this.$axios.get(
          `${baseUrl}/article/photo/${this.articlePnum}/comment/`
        ).then(res => {
          this.commentData = res.data.map(comment => ({
            ...comment,
            isEditMode: false
          }))
          this.commentLen = this.commentData.length;
        }).catch(err => {
          console.log("[DetailPhoto GET COMMENT] ", err);
        })
      },

      // [댓글 작성]
      createComment(){
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("articlePnum", this.articlePnum);
        formData.append("userNickname", this.commentAuthor);
        formData.append("commentPcontent", this.comment);

        // [POST]
        this.$axios.post(
          `${baseUrl}/article/photo/${this.articlePnum}/comment/`, formData
          // 성공 시
        ).then(() => {
          this.getComment(); // [GET] 함수 실행
          this.comment = ''; // 입력창 초기화
          // 실패 시
        }).catch(err => {
          console.log("[DetailPhoto CREATE COMMENT] ", err);
        })
      },

      // [댓글 삭제]
      deleteComment(commentPnum){
        this.$axios.delete(`${baseUrl}/article/photo/${this.articlePnum}/comment/${commentPnum}/`, {
        }).then(() => {
          this.getComment(); // [GET] 함수 실행
        }).catch(err => {
          console.log("[DetailPhoto DELETE COMMENT] ", err);
        })
      },

      // [댓글 수정]
      updateComment(commentPnum){
        event.preventDefault();
        this.$axios.put(`${baseUrl}/article/photo/${this.articlePnum}/comment/${commentPnum}/`, {
          commentPcontent: this.editedComment
        }).then(() => {
          this.getComment(); // [GET] 함수 실행
        }).catch(err => {
          console.log("[DetailPhoto PUT COMMENT] ", err);
        })
      },

      // [댓글 수정 모드]
      toggleEditMode(i){
        this.commentData[i].isEditMode = !this.commentData[i].isEditMode;
      }
    },
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
      top: 30px;
      right: 40px;
      cursor: pointer;

      a {
        color: #000;
      }
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
        
        overflow: hidden;

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

            .contents-top{
              display: flex;
              justify-content: space-around;
              align-items: center;
              border-bottom: 1px solid #dddddd;

              p {
                margin: 10px 0;
                padding: 0;
                font-size: 18px;
              }

              p:nth-of-type(2) {
                cursor: pointer;
              }

              .modal-board-contents-title {
                width: 80%;
                font-size: 24px;
                font-weight: 700;
              }
            }

            .contents-btm {
              .modal-board-contents-content {
                height: 100%;
                overflow: auto;
                padding: 0 20px;
                font-size: 18px;
              }
            }
          }

          .modal-board-comment {
            position: relative;
            height: 60%;
            text-align: left;
            padding: 0 20px;
            font-size: 18px;

            .modal-board-comment-inner {
              height: calc(100% - 120px);
              overflow: auto;

              // 댓글 한 줄 한 줄
              .comment { 
                padding-right: 20px;
                border-bottom: 1px solid #aaa;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .comment-icons {
                  display: flex;
                  gap: 10px;
                  cursor: pointer;
                }

                p {
                  margin: 0;
                }

                p:nth-of-type(1){
                  font-weight: 700;
                }

                .comment-edit {
                  width: 80%;

                  input {
                    width: 100%;
                    height: 25px;
                    border: none;
                    padding-left: 10px;
                  }
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