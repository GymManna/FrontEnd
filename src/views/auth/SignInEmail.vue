<template>
  <div class="container">
    <div class="inner">
      <span> E-mail </span> <input type="text" placeholder="E-mail 입력" v-model="userId">
    </div>
    <div class="inner">
      <span> Password </span> <input type="password" placeholder="Password 입력" v-model="userPw">
    </div>
    <button @click="userLogin()"> 로그인 </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: 'SignInEmail',
  data() {
    return {
      userId: "",
      userPw: ""
    };
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
    userLogin() {
      console.log("@@ userLogin() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/login";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "GET",
        params: {
          userId: this.userId,
          userPw: this.userPw
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          if (result.data == "") {
            alert("로그인 실패");
          } else {
            alert("로그인 성공")
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
    display: flex;
    flex-direction: column;
    
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .inner {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;

      margin-bottom: 20px;

      span {
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #FFDC5D;
        font-size: 18px;
      }

      input {
        width: 500px;
        height: 40px;
        border: none;
        outline: none;
        border-bottom: 1px solid #999;
      }
    }

    button {
      width: 200px;
      height: 50px;
      margin: 20px auto 0;
      border: none;
      background-color: #FFDC5D;
      cursor: pointer;
      font-size: 18px;
    }
    
    button:hover {
      background-color: #ffce1d;
    }

  }
</style>