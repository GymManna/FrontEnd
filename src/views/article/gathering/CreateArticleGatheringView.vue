<template>
  <div class="container">
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
      <input type="text" v-model="articleMember" />
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
      <textarea rows="10" cols="80" />
    </div>

    <button @click="func()">새 만나 작성</button>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    func() {
      console.log("@@ func() 실행");
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
