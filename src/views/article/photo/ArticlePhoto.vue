<template>
  <div class="container">
    <div class="btn-container">
      <router-link to="/photo/create">
        <button class="btn"> 인증하기 </button>
      </router-link>
    </div>
    
    <div class="card-container">
      <div v-for="image in imageData" :key="image.articlePnum" class="card">
        <img :src="image.articleImgurl" @error="setErrorImage" @click="openDetailImage(image.articlePnum)" :alt="image.articlePnum + 1 + '번 이미지'">
      </div>
    </div>
  </div>
</template>

<script>
  const baseUrl = process.env.VUE_APP_API_URL;

  export default {
    name: 'ArticlePhoto',
    data(){
      return {
        imageData: [],
        errorImage: require('@/assets/images/errorImage.png'),
        modalImageData: null,
        commentData: [],
        curArticleNum: 0
      }
    },
    methods: {
      // [게시글 불러오기]
      getArticle(){
        this.$axios.get(
          `${baseUrl}/article/photo/`
        ).then(res => {
          this.imageData = res.data;
        }).catch(err => {
          console.log("[ArticlePhoto] ", err)
        })
      },
      // [모달 열기(상세페이지 이동)]
      openDetailImage(articlePnum){
        this.$router.push({
          name: 'DetailArticlePhoto',
          params: {
            articlePnum
          }
        });
      },
      // [디폴트 이미지]
      setErrorImage(event){
        event.target.src = this.errorImage;
      },
    },
    mounted(){
      this.getArticle()
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