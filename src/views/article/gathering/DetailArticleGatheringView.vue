<template>
  <div class="container">
    <div>detail article gathering</div>

    <button @click="editGathering()">수정</button>
    <button @click="deleteGathering()">삭제</button>
    <div class="info-box">
      <div>제목</div>
      <input type="text" v-model="articleTitle" />
      <div>만나장</div>
      <input type="text" v-model="articleAuthor" />
      <div>카테고리</div>
      <input type="text" v-model="articleCategory" />
      <div>작성일</div>
      <input type="text" v-model="articleDate" />
      <div>참여자 수</div>
      <input type="text" v-model="articleMemberNum" />
    </div>
    <br><br><hr>

    <div class="map-box">
      <div class="map-box-search">
        <span>운동 센터</span>
        <input type="text" v-model="centerName" />
        <button @click="func()">검색</button>
      </div>
      <div>버터짐 강남점</div>
      <div class="map-box-map">
        지도 출력
      </div>
    </div>
    <br><br><hr>

    <div class="content-box">
      <span>내용</span>
      <textarea rows="10" cols="80" v-model="articleContent" />
    </div>
    <br><br>

    <div class="comment-box">
      <div class="comment-box-input">
        <span>댓글</span>
        <input type="text" v-model="commentContent" />
        <button @click="createComment()">입력</button>
      </div>
      
      <div class="comment-box-content">
        <table>
          <thead>
            <tr>
              <th>작성자</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>헬리니</td>
              <td>네 가능합니다 ^^
                <button @click="editCommentGathering()">수정</button>
                <button @click="deleteCommentGathering()">삭제</button>
              </td>
            </tr>
            <tr>
              <td>철순 오피설</td>
              <td>운동 처음 하는데 도와주실 수 있나요?
                <button @click="editCommentGathering()">수정</button>
                <button @click="deleteCommentGathering()">삭제</button>
              </td>
            </tr>
            <tr>
              <td>헬리니</td>
              <td>궁금한 거 있으시간
                <button @click="editCommentGathering()">수정</button>
                <button @click="deleteCommentGathering()">삭제</button>
              </td>
            </tr>
            <tr>
              <td>철순 오피셜</td>
              <td>네 가능합니다 ^^
                <button @click="editCommentGathering()">수정</button>
                <button @click="deleteCommentGathering()">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button @click="func()">만나 신청</button>
  </div>
</template>

<script>
export default {
  name: "DetailArticleGatheringView",
  data() {
    return {
      articleTitle: "디폴트 제목 있음",
      articleAuthor: "글 작성자",
      articleCategory: "헬스",
      articleDate: "2023 03 11",
      articleMemberNum: "4",
      articleContent:
      `asdfasdfasdf
두 번째 줄
세 번째 줄`,
      centerName: "버터짐 강남점",
      commentContent: "",
    };
  },
  methods: {
    func() {
      console.log("@@ func() 실행");
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
