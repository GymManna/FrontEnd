<template>
  <div class="container">
    <div class="menu">
      <my-page-menu />
    </div>

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
  display: grid;
  width: flex;
  grid-template-columns: 200px auto;
  // grid-template-rows: repeat(5, 1fr);

  background-color: lightyellow;
  gap: 10px;

  .contents {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    background-color: lightgrey;

    li {
      background-color: lightcyan;
    }
  }
}
</style>