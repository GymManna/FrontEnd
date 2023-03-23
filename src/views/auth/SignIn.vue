<template>
  <div class="container">
    <div class="box">
      <!-- <router-link to="signupkakao"> <button class="signin-kakao"> Sign in via kakao </button> </router-link> -->
      <button class="signin-kakao" @click="kakaoLogin()"> Sign in via kakao </button>
      <router-link to="signinemail"> <button class="signin-email"> Sign in via E-mail </button> </router-link>
      <router-link to="signup"> <button class="signup"> Sign up </button> </router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

  export default {
    name: 'SignIn',
    mounted() {
      // api 스크립트 소스 불러오기 및 지도 출력
      if (!window.Kakao) {
        this.loadKakaoScript();
      }
    },
    computed: {
      ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
    },
    methods: {
      ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
      moveTo (page) {
        console.log('@@ moveTo(' + page + ')')
        this.$router.push(this.domain + `/${page}`).catch(() => {})
      },
      loadKakaoScript() {
        // api 불러오기
        console.log("@@ loadKakaoScript() 실행");
        const script = document.createElement("script");
        script.src = "//developers.kakao.com/sdk/js/kakao.js";
        document.head.appendChild(script);
      },
      kakaoInit() {
        console.log("@@ kakaoInit() 실행");
        window.Kakao.init(process.env.VUE_APP_KAKAOMAP_KEY_JAVASCRIPT); //발급받은 키 중 javascript키를 사용해준다.
        // sdk초기화여부판단
        if (window.Kakao.isInitialized() == true) {
          console.log("SDK 초기화 성공");
        }
      },
      kakaoLogin() {
        console.log("@@ kakaoLogin() 실행");
        if (window.Kakao.isInitialized() == false) {
          this.kakaoInit();
        }
        window.Kakao.Auth.login({
          success: (response) => {
            console.log(response); // access token 정보
            window.Kakao.API.request({
              url: '/v2/user/me',
              success: (response) => {
                console.log(response); // kakao 계정 정보
                // DB에 이미 있는 이메일이면 로그인, 없는 계정이면 회원가입
                this.userLogin(response.kakao_account);
              },
              fail: (error) => {
                console.log(error);
              },
            })
          },
          fail: function (error) {
            console.log(error);
          },
        })
      },
      userLogin(account) {
        console.log("@@ userLogin() 실행");
        this.setVuexId(account.email);
        this.setVuexNickname(account.profile.nickname);
        var serverIP = process.env.VUE_APP_SERVER_IP,
          serverPort = process.env.VUE_APP_SERVER_PORT,
          pageUrl = "mygym/user/loginkakao";
        this.$axios({
          url: `http://${serverIP}:${serverPort}/${pageUrl}`,
          method: "GET",
          params: {
            userId: account.email,
          },
          responseType: "json",
        })
          .then((result) => {
            console.log("axios 성공");
            console.log(result);
            if (result.data == "") {
              console.log("@@ 카카오 계정 회원가입");
              alert("카카오 계정 회원가입");
              this.$moveTo("signupkakao")
            } else {
              console.log("@@ 로그인 성공");
              alert("로그인 성공!")
              this.setVuexId(result.data.userId);
              this.setVuexNickname(result.data.userNickname);
              this.$moveTo("/gathering");
            }
          })
          .catch((error) => {
            console.log("axios 실패");
            console.log(error);
          })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-image: url('../../assets/images/img1.jpeg');

    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 30px;

      margin-bottom: 20px;
      padding: 20px 0;
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .signin-kakao {
          width: 300px;
          height: 60px;
          border: none;
          background-color: #FFDC5D;
          cursor: pointer;
          font-size: 18px;
      }
      .signin-email {
          width: 300px;
          height: 60px;
          border: none;
          background-color: #D9D9D9;
          cursor: pointer;
          font-size: 18px;
      }
      .signup {
          width: 300px;
          height: 60px;
          border: none;
          background-color: #FFC329;
          cursor: pointer;
          font-size: 18px;
      }
    }
  }
</style>