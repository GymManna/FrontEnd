<template>
  <div class="container">
    <div class="inner">
      <span> E-mail </span> <input type="text" v-model="id" disabled>
    </div>
    <div class="inner">
      <span> 이름 </span> <input type="text" v-model="name">
    </div>
    <div class="inner">
      <span> 닉네임 </span> <input type="text" v-model="nickname">
    </div>
    
    
    
    <button @click="registerKakao()"> 회원가입 </button>
  </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: 'SignUpKakao',
  data() {
    return {
      id: "",
      name: "",
      nickname: ""
    }
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  mounted() {
    this.id = this.getVuexId;
    this.nickname = this.getVuexNickname;
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
          alert("회원가입되었습니다.\nid : " + result.data.userId);
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