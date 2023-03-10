<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="로고">
    </div>
    <nav>
      <button> 짐 만나요 </button>
      <button> 운동 인증해요 </button>
    </nav>
    <div class="user-page">
      <a href="">마이페이지</a>
      <a href="">로그아웃</a>
    </div>
  </div>
</template>

<script>

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

      button {
        width: 200px;
        height: 50px;

        border: none;
        background-color: #FFDC5D;
        font-size: 18px;
        cursor: pointer;
      }

      button:hover {
        background-color: #ffce1d;
      }
    }

    .user-page {
      display: flex;
      flex-direction: row;
      gap: 20px;

      a {
        color: #2c3e50;
        font-size: 18px;
        text-decoration: none;
      }
    }
  }
</style>