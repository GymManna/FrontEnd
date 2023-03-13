<template>
  <div class="container">
    <div class="btn-container">
      <router-link to="/photo/create">
        <button class="btn">
          인증하기
        </button>
      </router-link>
    </div>
    
    <div class="card-container">
      <div class="card" @click="toggleModalHandler">
        <img src="../../../assets/images/img1.jpeg" alt="오운완 이미지1">
      </div>

      <div class="card">
        <img src="../../../assets/images/img2.jpeg" alt="오운완 이미지2">
      </div>
      
      <div class="card">
        <img src="../../../assets/images/img3.jpeg" alt="오운완 이미지3">
      </div>
      
      <div class="card">
        <img src="../../../assets/images/img4.jpeg" alt="오운완 이미지4">
      </div>

      <div class="card">
        <img src="../../../assets/images/img5.jpeg" alt="오운완 이미지5">
      </div>

      <div class="card">
        <img src="../../../assets/images/img6.jpeg" alt="오운완 이미지6">
      </div>

      <div class="card">
        <img src="../../../assets/images/img7.jpeg" alt="오운완 이미지7">
      </div>

      <div class="card">
        <img src="../../../assets/images/img8.jpeg" alt="오운완 이미지8">
      </div>

    </div>
  </div>

  <DetailPhoto v-if="showModal" @close="toggleModalHandler"/>
</template>

<script>
  import DetailPhoto from "./DetailPhoto.vue";
  
  export default {
    name: 'ArticlePhoto',
    components: {
      DetailPhoto
    },
    data(){
      return {
        showModal: false
      }
    },
    methods: {
      toggleModalHandler: function(){
        this.showModal = !this.showModal
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    .btn-container {
      text-align: right;
      margin-right: 15px;

      .btn {
        width: 200px;
        height: 50px;
        border: none;
        background-color: #FFDC5D;
        cursor: pointer;
        font-size: 18px;
      }

      .btn:hover {
        background-color: #ffce1d;
      }
    }
    

    .card-container {
      display: flex;
      flex-flow: row wrap;
      justify-content: start;
      text-align: center;

      .card {
        width: 31.4%;
        height: 300px;

        margin: 5px;
        padding: 5px;

        overflow: hidden;
        cursor: pointer;
        
        img {
          width: 100%;
        }
      }
    }
  }
</style>