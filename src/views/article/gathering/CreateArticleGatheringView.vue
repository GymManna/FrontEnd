<template>
  <div class="container">
    <div>create article gathering</div>
    <button @click="func()">클릭실험</button>

    <div class="info-box">
      기본 정보 입력
    </div>
    <div class="map-box">
      지도 출력
    </div>
    <div class="content-box">
      내용 입력
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateArticleGatheringView",
  methods: {
    func() {
      console.log("@@ func() 실행");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
