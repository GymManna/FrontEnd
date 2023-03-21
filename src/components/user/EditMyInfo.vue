<template>
  <div class="container">
    <div class="box">
      <div class="userdata">
        <!-- <span> E-mail </span> <input type="text" v-model="id" readonly /> -->
        <span> E-mail </span> <input type="text" v-model="id" />
        <span> 이름 </span> <input type="text" v-model="name" />
        <span> 닉네임 </span> <input type="text" v-model="nickname" />
        <span> Password </span> <input type="password" v-model="password" />
        <span> Password 확인 </span> <input type="password" v-model="passwordch" />
        <span> 전화번호 </span> <input type="text" v-model="phone" />
      </div>
      <button @click="editUserInfo()">수정완료</button>
      <button @click="withdrawUser()">회원탈퇴</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMyInfo",
  data() {
    return {
      id: "cheolsu-official@kakao.com",
      name: "철수",
      nickname: "철수바라기",
      password: "a",
      passwordch: "a",
      phone: "010-1234-4321",
    }
  },
  methods: {
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
  display: grid;
  width: flex;
  grid-template-columns: 200px auto;
  // grid-template-rows: repeat(5, 1fr);

  background-color: lightyellow;
  gap: 10px;

  .box {
    justify-self: center; // 가로 위치 가운데정렬
    align-self: center; // 세로 위치 가운데정렬
    background-color: lightgrey;

    .userdata {
      display: grid;
      width: 500px;
      height: 240px;
      grid-template-columns: 2fr 5fr;
      grid-template-rows: repeat(4, 1fr);

      background-color: lightcyan;
      gap: 10px;
    }
  }
}
</style>