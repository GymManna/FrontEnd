<template>
  <div class="container">
    <MyPageMenu />
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
import MyPageMenu from "@/components/user/MyPageMenu.vue";
export default {
  components: { MyPageMenu },
  name: "MyPageView", // 컴포넌트 이름 지정
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 70vh;
  
  display: flex;
  flex-direction: row;
  gap: 10px;

  .contents {
    width: 100%;
  }
}
</style>