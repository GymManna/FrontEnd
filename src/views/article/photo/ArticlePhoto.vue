<template>
  <div class="container">
    <div class="btn-container">
      <router-link to="/photo/create">
        <button class="btn"> 인증하기 </button>
      </router-link>
    </div>
    
    <div class="card-container">
      <div v-for="image, i in imageArray" :key="i" @click="toggleModalHandler" class="card">
        <img :src="imageUrl || imageError" :alt="i + 1 + '번 이미지'">
      </div>
    </div>
  </div>

  <DetailPhoto v-if="showModal" @close="toggleModalHandler"/>
</template>

<script>
  import DetailPhoto from "./DetailPhoto.vue";
  const baseUrl = process.env.VUE_APP_API_URL;

  export default {
    name: 'ArticlePhoto',
    components: {
      DetailPhoto
    },
    data(){
      return {
        showModal: false,
        imageArray: '',
        imageUrl: '',
        imageError: require('@/assets/images/imageError.png')
      }
    },
    methods: {
      toggleModalHandler: function(){
        this.showModal = !this.showModal
      },
      getArticlePhoto: function(){
        this.$axios.get(
          `${baseUrl}/article/photo`
        ).then(res => {
          console.log("[ArticlePhoto] ", res);
          this.imageArray = res.data;
        }).catch(err => {
          console.log("[ArticlePhoto] ", err)
        })
      },
    },
    mounted(){
      this.getArticlePhoto()
    }
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