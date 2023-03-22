<template>
  <div class="container">
    <span> E-mail </span> <input type="text" placeholder="E-mail 입력" v-model="userId">
    <span> 이름 </span> <input type="text" placeholder="이름 입력" v-model="userName">
    <span> 닉네임 </span> <input type="text" placeholder="닉네임 입력" v-model="userNickname">
    <span> Password </span> <input type="password" placeholder="Password 입력" v-model="userPassword">
    <span> 전화번호 </span> <input type="text" placeholder="전화번호 입력" v-model="userPhone">
  </div>
    <button @click="register()"> 회원가입 </button>
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
    ...mapGetters(["getVuexId"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId"]), // Vuex-actions 활용
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
          this.setVuexId(this.userId);
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
    display: grid;
    width: 700px;
    height: 300px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: repeat(5, 1fr);

    column-gap: 10px;
    row-gap: 10px;
    margin-bottom: 20px;
    padding: 20px 0;
    
    background-color: #ffffff;

    span {
        text-align: right;
        background-color: #FFDC5D;
        font-size: 18px;
        
    }

  }
</style>