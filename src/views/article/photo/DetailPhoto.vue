<template>
  <div class="container">
      <div class="modal">
        <div class="modal-img">
          <img src="../../../assets/images/img1.jpeg" alt="">
        </div>

        <div class="modal-board">
          <div class="modal-board-content">

          </div>
          <div class="modal-board-comment">
            
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "DetailPhoto"
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);

    .modal {
      width: 90%;
      background-color: #ffffff;
    }
  }
</style>