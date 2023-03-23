<template>
  <div class="container">
    <div class="info-box">
      <div>제목</div>
      <input type="text" v-model="articleTitle" />
      <div>만나장</div>
      <input type="text" v-model="articleAuthor" disabled />
      <div>카테고리</div>
      <input type="text" v-model="articleCategory" />
      <!-- <div>작성일</div>
      <input type="text" v-model="articleDate" />
      <div>참여자 수</div>
      <input type="text" v-model="articleMember" /> -->
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

    <button @click="createArticleGathering()">새 만나 작성</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: "CreateArticleGatheringView",
  data() {
    return {
      articleTitle: "",
      articleAuthor: "",
      articleCategory: "",
      articleDate: "",
      articleMember: "",
      centerName: "",
      articleContent: "",
    };
  },
  computed: {
    ...mapGetters(["getVuexId"]), // Vuex-getters 활용
  },
  mounted() {
    console.log("@ create-mounted() 실행");
    this.articleAuthor = this.getVuexId;
  },
  methods: {
    ...mapActions(["setVuexId"]), // Vuex-actions 활용
    func() {
      console.log("@@ func() 실행");
    },
    createArticleGathering() {
      console.log("@@ createArticleGathering() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/create";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "POST",
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
          this.$moveTo("/gathering");
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
  width: 90%;
  margin: 0 auto;

  .info-box {
    display: grid;
    width: flex;
    height: flex;
    grid-template-columns: 20% 80%;
    grid-template-rows: repeat(3, 1fr);

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
