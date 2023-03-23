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
  display: flex;
  flex-direction: row;

  gap: 10px;

  .menu {
    width: 20%;
  }

  .contents {
    width: 100%;

    li {
      background-color: lightcyan;
    }
  }
}
</style>