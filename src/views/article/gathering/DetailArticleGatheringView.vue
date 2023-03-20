<template>
  <div class="container">
    <div>detail article gathering</div>
    <button @click="func()">클릭실험</button>
  </div>
</template>

<script>
export default {
  name: "DetailArticleGatheringView",
  methods: {
    func() {
      console.log("@@ func() 실행");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
