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
      <p @click="signOut()">로그아웃</p>
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
        alert("[로그아웃] \nID : " + this.getVuexId);
        if (window.Kakao) {
          this.kakaoLogout();
        }
        this.setVuexId(null);
        this.setVuexNickname(null);
        this.$moveTo("/");
      },
      kakaoLogout() {
        console.log("@@ kakaoLogout() 실행");
        if (window.Kakao.isInitialized() == true) {
          if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.API.request({
              url: '/v1/user/unlink',
              success: function (response) {
                console.log(response); // logout되는 id
              },
              fail: function (error) {
                console.log(error);
              },
            })
            window.Kakao.Auth.setAccessToken(undefined)
          } else {
            console.log("@@ access token 없음");
          }
        }
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

      div {
        font-weight: 800;
        font-size: 20px;
      }
      
      a {
        color: #2c3e50;
        text-decoration: none;
        font-size: 18px;
      }

      p {
        margin: 0;
        cursor: pointer;
        font-size: 18px;
      }

      p:hover {
        color: blue;
        text-decoration: underline;
      }
    }
  }
</style>