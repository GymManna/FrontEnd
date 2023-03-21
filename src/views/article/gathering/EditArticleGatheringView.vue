<template>
  <div class="container">
    <div>edit article gathering</div>
    <button @click="func()">클릭실험</button>

    <div class="info-box">
      <input type="hidden" v-model="articleGNum" />
      <div>제목</div>
      <input type="text" v-model="articleTitle" />
      <div>만나장</div>
      <input type="text" v-model="articleAuthor" />
      <div>카테고리</div>
      <input type="text" v-model="articleCategory" />
      <div>작성일</div>
      <input type="text" v-model="articleDate" disabled />
      <div>참여자 수</div>
      <input type="text" v-model="articleMemberNum" disabled />
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
      <textarea rows="10" cols="80" v-model="articleContent"/>
    </div>

    <button @click="editArticleGathering()">만나 수정</button>
  </div>
</template>

<script>
export default {
  name: "EditArticleGatheringView",
  data() {
    return {
      articleGNum: "1",
      articleTitle: "디폴트 제목 있음",
      articleAuthor: "글 작성자",
      articleCategory: "헬스",
      articleDate: "2023 03 11",
      articleMemberNum: "4",
      centerName: "버터짐 강남점",
      articleContent:
      `article content 내용
      여러 줄 입력 가능
      `
    };
  },
  methods: {
    func() {
      console.log("@@ func() 실행");
    },
    editArticleGathering() {
      console.log("@@ editArticleGathering() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/update";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "PUT",
        params: {
          title: this.articleTitle,
          content: this.articleContent,
          category: this.articleCategory,
          userId: this.articleAuthor,
          centerName: this.centerName,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          // if else 로 회원가입 성공, 실패 조건문 추가할 것
          this.$moveTo("/gathering/detail");
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
          alert("axios 오류");
        })
    },
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
