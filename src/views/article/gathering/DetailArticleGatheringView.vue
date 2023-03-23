<template>
  <div class="container">
    <div>detail article gathering</div>

    <button @click="editGathering()">수정</button>
    <button @click="deleteGathering()">삭제</button>
    <div class="info-box">
      <input type="hidden" v-model="articleGnum" />
      <div>제목</div>
      <input type="text" v-model="articleTitle" readonly />
      <div>만나장</div>
      <input type="text" v-model="articleAuthor" readonly />
      <div>카테고리</div>
      <input type="text" v-model="articleCategory" readonly />
      <div>작성일</div>
      <input type="text" v-model="articleDate" readonly />
      <div>참여자 수</div>
      <input type="text" v-model="articleMemberNum" readonly />
    </div>
    <br><br><hr>

    <div class="map-box">
      <div class="map-box-search">
        <span>운동 센터</span>
        <input type="text" v-model="centerName" readonly />
        <button @click="func()">검색</button>
      </div>
      <div>{{ centerName }}</div>
      <div class="map-box-map">
        지도 출력
      </div>
    </div>
    <br><br><hr>

    <div class="content-box">
      <span>내용</span>
      <textarea rows="10" cols="80" v-model="articleContent" readonly />
    </div>
    <br><br>

    <div class="comment-box">
      <div class="comment-box-input">
        <div>댓글</div>
        <span>{{ getVuexNickname }}</span>
        <input type="text" v-model="commentContent" />
        <button @click="createComment()">입력</button>
      </div>
      
      <div>
        <div class="comment-box-content">
          <table class="comment-table">
            <thead>
              <tr>
                <th scope="col" width="100px">댓글번호</th>
                <th scope="col" width="200px">작성자</th>
                <th scope="col" width="400px">내용</th>
                <th scope="col" width="80px">수정</th>
                <th scope="col" width="80px">삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in gCommentList" :key="index">
                <td style="text-align: center">{{ item.articleGnum }}</td>
                <td style="text-align: center">{{ item.centerName }}</td>
                <td style="text-align: center">{{ item.countPuser }}</td>
                <td style="text-align: center">
                  <button @click="editCommentGathering(index)"
                    v-bind:id="'editBtn' + (index + 1)"
                  >
                    수정
                  </button>
                </td>
                <td style="text-align: center">
                  <button @click="deleteCommentGathering(index)"
                    v-bind:id="'delBtn' + (index + 1)"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
    <button @click="joinGathering()">만나 신청</button>
    <button @click="cancelGathering()">만나 신청 취소</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: "DetailArticleGatheringView",
  data() {
    return {
      userId: "", // 세션 정보로 넣을 것
      articleGnum: "",
      articleTitle: "",
      articleAuthor: "",
      articleCategory: "",
      articleDate: "",
      articleMemberNum: "",
      articleContent: "",
      centerName: "",
      commentContent: "",
      gCommentList: [],
    };
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  mounted() {
    this.userId = this.getVuexNickname;
    this.articleGnum = "3";
    this.articleTitle = "디폴트 제목 있음";
    this.articleAuthor = "글 작성자";
    this.articleCategory = "헬스";
    this.articleDate = "2023 03 11";
    this.articleMemberNum = "4";
    this.articleContent = 
      `asdfasdfasdf
두 번째 줄
세 번째 줄`,
    this.centerName = "버터짐 강남점";
    this.commentContent = "댓글내용";
    this.getCommentList(this.articleGnum);
  },
  methods: {
    ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
    func() {
      console.log("@@ func() 실행");
    },
    getCommentList(articleGnum) {
      console.log("@@ getCommentList() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/comment/getarticlelist";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "GET",
        params: {
          articleGnum: articleGnum,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          this.gCommentList = result.data.CList;
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
        })
    },
    editGathering() {
      console.log("@@ editGathering() 실행");
      this.$moveTo("/gathering/edit");
      
    },
    deleteGathering() {
      console.log("@@ deleteGathering() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/delete";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "DELETE",
        params: {
          gnum: 1,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          // if else 로 삭제 성공, 실패 조건문 추가할 것
          this.$moveTo("/gathering");
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
          alert("axios 오류");
        })

    },
    createComment() {
      console.log("@@ createComment() 실행");
    },
    editCommentGathering() {
      console.log("@@ editCommentGathering() 실행");
    },
    deleteCommentGathering() {
      console.log("@@ deleteCommentGathering() 실행");
    },
    joinGathering() {
      console.log("@@ joinGathering() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/joinUser";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "POST",
        params: {
          userId: this.articleAuthor,
          articleGnum: this.articleGnum,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          if (result.data == true) {
            alert("만나 신청 완료!");
          } else {
            alert("만나 신청 실패");
          }
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
          alert("axios 오류");
        })
    },
    cancelGathering() {
      console.log("@@ cancelGathering() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/cancelUser";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "DELETE",
        params: {
          userId: this.articleAuthor,
          articleGnum: this.articleGnum,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          if (result.data == true) {
            alert("만나 취소 완료!");
          } else {
            alert("만나 취소 실패");
          }
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
          alert("axios 오류");
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 700px;

  .info-box {
    display: grid;
    width: flex;
    height: flex;
    grid-template-columns: 20% 80%;
    grid-template-rows: repeat(5, 1fr);

    background-color: lightgray;
    gap: 10px;
  }

  .map-box {
    .map-box-search {
      display: inline-block;
      width: 700px;
      height: flex;
      grid-template-columns: 20% 80%;
      grid-template-rows: repeat(5, 1fr);

      background-color: lightsteelblue;
      gap: 10px;
    }
  }

  .content-box {
    justify-content: center;

    background-color: lightcyan;
  }
}
</style>
