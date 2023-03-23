<template>
  <div class="container">
    <div class="logo">
      <router-link to="/gathering">
        <img src="../../assets/images/logo.png" alt="로고">
      </router-link>
      
    </div>
    <nav>
      <router-link to="/gathering"> <button>짐 만나요</button> </router-link>
      <router-link to="/photo"> <button>운동 인증해요</button> </router-link>
    </nav>
    <div class="user-page">
      <div>{{ getVuexNickname }}님</div>
      <router-link to="/mypage">마이페이지</router-link>
      <!-- <router-link to="/">로그아웃</router-link> -->
      <button @click="signOut()">로그아웃</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

  export default {
    name: 'VHeader',
    computed: {
      ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
    },
    methods: {
      ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
      signOut() {
        console.log("@@ signOut() 실행");
        alert("로그아웃되었습니다.\nid : " + this.getVuexId);
        this.setVuexId(null);
        this.setVuexNickname(null);
        this.$moveTo("/");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    padding: 20px 0;
    
    background-color: #ffffff;

    .logo {
      img {
        width: 150px;
      }
    }

    nav {
      display: flex;
      flex-direction: row;
      gap: 10px;

      a {
        color: #2c3e50;
        
        button {
          width: 200px;
          height: 50px;
          border: none;
          background-color: #FFDC5D;
          cursor: pointer;
          font-size: 18px;
        }

        button:hover {
          background-color: #ffce1d;
        }
      }
    }

    .user-page {
      display: flex;
      flex-direction: row;
      gap: 20px;

      a {
        color: #2c3e50;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
</style>