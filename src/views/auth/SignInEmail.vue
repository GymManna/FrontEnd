<template>
  <div class="container">
    <span> E-mail </span> <input type="text" placeholder="E-mail 입력" v-model="userId">
    <span> Password </span> <input type="password" placeholder="Password 입력" v-model="userPw">
  </div>
    <button @click="userLogin()"> 로그인 </button>
</template>

<script>
  export default {
    name: 'SignInEmail',
    data() {
      return {
        userId: "",
        userPw: ""
      };
    },
    methods: {
      userLogin() {
        console.log("@@ userLogin() 실행");
        var serverIP = process.env.VUE_APP_SERVER_IP,
          serverPort = process.env.VUE_APP_SERVER_PORT,
          pageUrl = "mygym/user/login";
        // var serverIP = "localhost",
        //   serverPort = "8080",
        //   pageUrl = "mygym/user/login";
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
          })
          .catch((error) => {
            console.log("axios 실패");
            console.log(error);
          })
        
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    display: grid;
    width: 700px;
    height: 120px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: repeat(2, 1fr);

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