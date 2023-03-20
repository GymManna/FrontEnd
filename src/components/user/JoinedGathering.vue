<template>
  <div class="container">
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
export default {
  name: "JoinedGathering",
};
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