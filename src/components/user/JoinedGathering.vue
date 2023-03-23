<template>
  <div class="container">
    <ul>
        <li><span>1</span>만나 글</li>
        <li><span>2</span>만나 글</li>
        <li><span>3</span>만나 글</li>
        <li><span>4</span>만나 글</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "JoinedGathering",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  
  border: 1px solid #999;

  ul {
    width: 100%;
    li {
      width: 90%;
      text-align: left;
      margin-bottom: 20px;
      list-style: none;
      border-bottom: 1px solid #999;

      span {
        margin-right: 10px;
      }
    }
  }
}
</style>