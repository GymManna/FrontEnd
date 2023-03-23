<template>
  <div class="container">
    <div class="mapbox">
      <div class="button-container">
        <button class="yellow-botton" @click="createGathering()">새 만나 작성</button>
      </div>

      <div class="map">
        <gathering-main-map />
      </div>

      <div>
        <div>게시글 리스트 출력</div>
        <div class="table-box">
          <table class="gathering-table">
            <thead>
              <tr>
                <th scope="col" width="80px">글번호</th>
                <th scope="col" width="400px">제목</th>
                <th scope="col" width="300px">장소</th>
                <th scope="col" width="80px">현재인원</th>
                <th scope="col" width="80px">최대인원</th>
                <th scope="col" width="100px">삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in GatheringList" :key="index">
                <td style="text-align: center">{{ item.articleGnum }}</td>
                <td style="text-align: left" text-align="left">
                  <a href="#" v-on:click="showDetailGathering()">
                    {{ item.articleGtitle }}
                  </a>
                </td>
                <td style="text-align: center">{{ item.centerName }}</td>
                <td style="text-align: center">{{ item.countPuser }}</td>
                <td style="text-align: center">4</td>
                <td style="text-align: center">
                  <button
                    v-on:click="delBtnClicked(index, $event)"
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

      <div>
        <hr><hr>
        <div>임시 테스트용</div>
        <select class="selectbox">
          <option value="health">헬스</option>
          <option value="pilates">필라테스</option>
        </select>
        <input type="text" />
        <button @click="searchCenter()">검색</button>
        <br>
        <button @click="getGatheringList()">게시글 리스트 가져오기(임시)</button>
        <button @click="showDetailGathering()">만나 상세보기(임시)</button>
        <button @click="editGathering()">만나 수정하기(임시)</button>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import GatheringMainMap from "@/components/gathering/GatheringMainMap.vue";

import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  components: { GatheringMainMap },
  name: "ArticleGatheringView",
  data() {
    return {
      GatheringList: []
    }
  },
  mounted() {
    // this.GatheringList = 
  },
  computed: {
    ...mapGetters(["getVuexId"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId"]), // Vuex-actions 활용
    searchCenter() {
      console.log("@@ searchCenter() 실행");
    },
    getGatheringList() {
      console.log("@@ getGatheringList() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/article/searchlist";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "GET",
        params: {
          centerName: "혜화 헬스장",
          // articleGnum: "1"
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          this.GatheringList = result.data.GList;
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
        })
    },
    createGathering() {
      console.log("@@ createGathering() 실행");
      this.$moveTo("/gathering/create");
    },
    showDetailGathering() {
      console.log("@@ showDetailGathering() 실행");
      this.$moveTo("/gathering/detail");
    },
    editGathering() {
      console.log("@@ editGathering() 실행");
      this.$moveTo("/gathering/edit");
    },
  }
};
</script>

<style lang="scss" scoped>
 .button-container { 
  text-align: right;
  
  .yellow-botton {
    width: 200px;
    height: 50px;
    border: none;
    background-color: #FFDC5D;
    cursor: pointer;
    font-size: 18px;
  }

  .yellow-botton:hover {
    background-color: #ffce1d;
  }

 }
</style>