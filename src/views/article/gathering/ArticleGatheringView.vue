<template>
  <div class="container">
    <div class="mapbox">

      <button class="yellow-botton" @click="createGathering()">새 만나 작성</button>
      <div class="map">
        <gathering-main-map />
      </div>

      <div>
        <div>게시글 리스트 출력</div>
      </div>

      <div>
        <hr>
        <div>임시 테스트용</div>
        <select class="selectbox">
          <option value="health">헬스</option>
          <option value="pilates">필라테스</option>
        </select>
        <input type="text" />
        <button @click="searchCenter()">검색</button>
        <br>
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
  computed: {
    ...mapGetters(["getVuexId"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId"]), // Vuex-actions 활용
    searchCenter() {
      console.log("@@ searchCenter() 실행");
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
.yellow-botton {
  width: 100px;
  height: 30px;
  border: none;
  background-color: #FFDC5D;
  cursor: pointer;
  font-size: 14px;
}
</style>