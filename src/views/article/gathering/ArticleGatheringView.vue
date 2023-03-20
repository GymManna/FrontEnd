<template>
  <div class="container">
    <div class="mapbox">
      <select class="selectbox">
        <option value="health">헬스</option>
        <option value="pilates">필라테스</option>
      </select>
      <input type="text" />
      <div>
        <button @click="createGathering()">새 만나 작성</button>
      </div>
      <div>
        <button @click="showDetailGathering()">만나 상세보기(임시)</button>
      </div>
      <div>
        <button @click="editGathering()">만나 수정하기(임시)</button>
      </div>
      <div class="map">
        <gathering-main-map />
      </div>
    </div>
  </div>
</template>

<script>
import GatheringMainMap from "@/components/gathering/GatheringMainMap.vue";

export default {
  components: { GatheringMainMap },
  name: "ArticleGatheringView",
  methods: {
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>