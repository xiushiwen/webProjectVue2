<template>
  <div class="carousel">
    <el-carousel indicator-position="outside" height="2rem">
      <el-carousel-item v-for="(item, index) in 4" :key="index">
        <img src="~assets/logo.png"></img>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    // todo
  };
</script>

<style lang="scss" scoped>
  .carousel {
    background-color: #fff;
    .el-carousel {
      margin-top: 1rem;
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: .18rem;
      opacity: 0.75;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
</style>
