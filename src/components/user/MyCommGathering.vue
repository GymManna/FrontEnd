<template>
  <div class="container">
    <table>
        <thead>
          <tr>
            <th>만나번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>삭제</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>제목11</td>
            <td>댓글내용1</td>
            <td><button>삭제</button></td>
          </tr>
          <tr>
            <td>001</td>
            <td>제목11</td>
            <td>댓글내용2</td>
            <td><button>삭제</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>제목22</td>
            <td>댓글내용3</td>
            <td><button>삭제</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    name: "MyCommGathering",
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;

    table {
      width: 100%;
      border-collapse: collapse;
      
      thead {
        background-color: #eee;
        font-weight: bold;
        
        th {
          border: 1px solid #ddd;
          padding: 10px;
        }
      }
      
      tbody {
        tr {
          &:nth-child(even) {
            background-color: #f5f5f5;
          }
          
          td {
            border: 1px solid #ddd;
            padding: 10px;
          }
        }
      }
    }
  }
</style>