<template>
  <div class="container">
    <form class="form">
      <div role="form" class="form-input">
        <input type="text" placeholder="제목을 입력하세요" class="form-input-title">
        <input type="file" accept="image/*" class="form-input-photo">
      </div>
      
      <textarea name="photoContent" id="photoContent" cols="30" rows="10" maxlength="500">
      </textarea>

      <button type="submit" class="btn">
        업로드하기
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CreateArticlePhoto'
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
      .btn {
          width: 200px;
          height: 50px;
          margin: 0 auto;
          border: none;
          background-color: #FFDC5D;
          cursor: pointer;
          font-size: 18px;
        }

        .btn:hover {
          background-color: #ffce1d;
        }
    }
  }
</style>