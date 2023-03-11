<template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="로고">
    </div>
    <nav>
      <router-link to="/gathering"> <button>짐 만나요</button> </router-link>
      <router-link to="/photo"> <button>운동 인증해요</button> </router-link>
    </nav>
    <div class="user-page">
      <a href="/joinedgathering">마이페이지</a>
      <a href="/">로그아웃</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VHeader'
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

      a {
        color: #2c3e50;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
</style>