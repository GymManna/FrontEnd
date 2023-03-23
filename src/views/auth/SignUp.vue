<template>
  <div class="container">
    <div class="inner">
      <span> E-mail </span> <input type="text" placeholder="E-mail 입력" v-model="userId">
    </div>
    <div class="inner">
      <span> 이름 </span> <input type="text" placeholder="이름 입력" v-model="userName">
    </div>
    <div class="inner">
      <span> 닉네임 </span> <input type="text" placeholder="닉네임 입력" v-model="userNickname">
    </div>
    <div class="inner">
      <span> Password </span> <input type="password" placeholder="Password 입력" v-model="userPassword">
    </div>
    <div class="inner">
      <span> 전화번호 </span> <input type="text" placeholder="전화번호 입력" v-model="userPhone">
    </div>
    
    <button @click="register()"> 회원가입 </button>
  </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: 'SignUp',
  data() {
    return {
      userId: "",
      userName: "",
      userNickname: "",
      userPassword: "",
      userPhone: "",
    };
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
    register() {
      console.log("@@ register() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/register";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "POST",
        params: {
          userId: this.userId,
          userName: this.userName,
          userNickname: this.userNickname,
          userPassword: this.userPassword,
          userPhone: this.userPhone,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          // if else 로 회원가입 성공, 실패 조건문 추가할 것
          alert("회원가입되었습니다.\nid : " + this.userId);
          this.setVuexId(result.data.userId);
          this.setVuexNickname(result.data.userNickname);
          this.$moveTo("/gathering");
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
          alert("axios 오류");
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