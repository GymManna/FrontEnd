<template>
  <div class="container">
    <div class="inner">
      <span> E-mail </span> <input type="text" v-model="id" />
    </div>
    <div class="inner">
      <span> 이름 </span> <input type="text" v-model="name" />
    </div>
    <div class="inner">
      <span> 닉네임 </span> <input type="text" v-model="nickname" />
    </div>
    <div class="inner">
      <span> Password </span> <input type="password" v-model="password" />
    </div>
    <div class="inner">
      <span> Password 확인 </span> <input type="password" v-model="passwordch" />
    </div>
    <div class="inner">
      <span> 전화번호 </span> <input type="text" v-model="phone" />
    </div>
        
    <div class="btnbox">
      <button @click="editUserInfo()">수정완료</button>
      <button @click="withdrawUser()">회원탈퇴</button>
    </div>
        
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex-map helper 사용

export default {
  name: "EditMyInfo",
  data() {
    return {
      id: "",
      name: "",
      nickname: "",
      password: "",
      passwordch: "",
      phone: "",
    }
  },
  computed: {
    ...mapGetters(["getVuexId", "getVuexNickname"]), // Vuex-getters 활용
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["setVuexId", "setVuexNickname"]), // Vuex-actions 활용
    getUserInfo() {
      console.log("@@ editUserInfo() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/userinfo";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "GET",
        params: {
          userId: this.getVuexId
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          if (result.data == "") {
            console.log("@@ 정보 불러오기 실패");
            alert("정보 불러오기 실패");
          } else {
            console.log("@@ 정보 불러오기 성공");
            this.id = result.data.userId;
            this.name = result.data.userName;
            this.nickname = result.data.userNickname;
            this.password = result.data.userPassword;
            this.passwordch = result.data.userPassword;
            this.phone = result.data.userPhone;
          }
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
        })
    },
    editUserInfo() {
      console.log("@@ editUserInfo() 실행");
      if (this.password == this.passwordch) {
        console.log("패스워드 일치. 정보 수정");
      } else {
        alert("패스워드 불일치");
      }
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/update";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "PUT",
        params: {
          userId: this.id,
          userName: this.name,
          userNickname: this.nickname,
          userPassword: this.password,
          userPhone: this.Phone,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          alert("회원정보 수정 완료");
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
        });
    },
    withdrawUser() {
      console.log("@@ withdrawUser() 실행");
      var serverIP = process.env.VUE_APP_SERVER_IP,
        serverPort = process.env.VUE_APP_SERVER_PORT,
        pageUrl = "mygym/user/delete";
      this.$axios({
        url: `http://${serverIP}:${serverPort}/${pageUrl}`,
        method: "DELETE",
        params: {
          userId: this.id,
          userName: this.name,
          userNickname: this.nickname,
          userPassword: this.password,
          userPhone: this.Phone,
        },
        responseType: "json",
      })
        .then((result) => {
          console.log("axios 성공");
          console.log(result);
          alert("회원 탈퇴되었습니다.");
          this.$moveTo("/");
        })
        .catch((error) => {
          console.log("axios 실패");
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    
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

    .btnbox {
      width: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

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
  }
</style>