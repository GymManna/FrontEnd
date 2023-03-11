<template>
  <div class="container">
    <my-page-menu />

    <div class="box">
      <ul>
        <li>만나 글 1</li>
        <li>만나 글 2</li>
        <li>만나 글 3</li>
        <li>만나 글 4</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MyPageMenu from "./MyPageMenu";

  export default {
  components: { MyPageMenu },
    name: 'JoinedGathering'
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
    
    .box {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;
      background-color: lightgrey;

      li {
        background-color: lightcyan;
      }
    }
  }
</style>