<template>
  <div class="container">
    <my-page-menu />

    <div class="table">
      <table>
        <thead>
          <tr>
            <th> 만나번호 </th>
            <th> 제목 </th>
            <th> 내용 </th>
            <th> 삭제 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 001 </td>
            <td> 제목11 </td>
            <td> 댓글내용1 </td>
            <td> <button> 삭제 </button> </td>
          </tr>
          <tr>
            <td> 001</td>
            <td> 제목11 </td>
            <td> 댓글내용2 </td>
            <td> <button> 삭제 </button> </td>
          </tr>
          <tr>
            <td> 002 </td>
            <td> 제목22 </td>
            <td> 댓글내용3 </td>
            <td> <button> 삭제 </button> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MyPageMenu from './MyPageMenu.vue';

  export default {
  components: { MyPageMenu },
    name: 'MyCommGathering'
  }
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    width: flex;
    grid-template-columns: 200px auto;
    // grid-template-rows: repeat(5, 1fr);
    
    background-color: lightyellow;
    gap: 10px;
    
    .table {
      width: 500px;
      height: auto;
      
      justify-self: center;
      align-self: center;
      background-color: lightgrey;
    }
  }
</style>