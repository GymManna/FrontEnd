<template>
  <div class="container">
    <span> E-mail </span> <input type="text" v-model="id" disabled>
    <span> 이름 </span> <input type="text" v-model="name">
    <span> 닉네임 </span> <input type="text" v-model="nickname">
  </div>
    <button @click="registerKakao()"> 회원가입 </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: 'SignUpKakao',
  data() {
    return {
      id: "cheolsu-official@kakao.com",
      name: "",
      nickname: "철수철수"
    }
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  methods: {
    ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
    func() {
      console.log("@@ func() 실행");
    },
    registerKakao() {
      console.log("@@ registerKakao() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/registeruserkakao";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "POST",
        params: {
          userId: this.id,
          userName: this.name,
          userNickname: this.nickname,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("@@ 카카오 회원가입 성공");
          console.log(result);
          // if else 로 회원가입 성공, 실패 조건문 추가할 것
          alert("회원가입되었습니다.\nid : " + this.userId);
          this.setVuexId(result.data.userId);
          this.setVuexNickname(result.data.userNickname);
          this.$moveTo("/gathering");
        })
        .catch((error) => {
          console.log("@@ 카카오 회원가입 실패");
          console.log(error);
          alert("axios 오류");
        });
    }
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: grid;
    width: 700px;
    height: 180px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: repeat(3, 1fr);

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