<template>
  <div class="container">
    <form
      @submit="uploadPost" 
      class="form">
      <div role="form" class="form-input">
        <input type="text" name="title" v-model="title" class="form-input-title" placeholder="제목을 입력하세요">
        <input type="file" ref="fileInput" name="photoImage" class="form-input-photo" @change="uploadImage">
      </div>
      <textarea name="content" v-model="content" id="content" maxlength="500"></textarea>
      <button type="submit" class="button"> 업로드하기 </button>
    </form>
  </div>
</template>

<script>
  const baseUrl = process.env.VUE_APP_API_URL;

  export default {
    name: 'CreateArticlePhoto',
    data(){
      return {
        author: "admin",
        title: this.title,
        content: this.content,
        image: null,
        imageUrl: null
      }
    },
    methods: {
      uploadImage(event) {
        this.image = event.target.files[0];
      },
      uploadPost() {
        event.preventDefault();

        const data = {
          userId: this.author,
          articlePtitle: this.title,
          articlePcontent: this.content
        }
        console.log(this.author, this.title, this.content);

        this.$axios.post(
          `${baseUrl}/article/photo`, data
        ).then(res => {
          
          console.log("게시글 등록 res: ", res);

          // const formData = new FormData(); // formData 생성 후
          // formData.append("userId", this.author); // 글 작성자(더미데이터)
          // formData.append("articlePtitle", this.title); // 글 제목
          // formData.append("articlePcontent", this.content); // 글 내용
          // formData.append("image", this.image); // 이미지

          // axios 한 번 더 보내기
          // baseUrl/article/photo/${articlePNum}/images
        }).catch(err => {
          console.log(err);
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 80%;
    margin: 0 auto;

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .form-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .form-input-title {
          width: 60%;
          height: 30px;
          border: none;
          outline: none;
          border-bottom: 1px solid #999;
        }

        .form-input-photo {
          width: 40%;
        }
      }
      .button {
        width: 200px;
        height: 50px;
        margin: 0 auto;
        border: none;
        background-color: #FFDC5D;
        cursor: pointer;
        font-size: 18px;
      }

      .button:hover {
        background-color: #ffce1d;
      }
    }
  }
</style>