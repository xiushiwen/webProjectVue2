<template>
  <div class="tool">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple" @click="goToHomepage">我的宝贝</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">个性设置</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">我的收藏</div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      goToHomepage () {
        location.href = 'http://localhost:9090/pages/homepage/index.html';
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tool {
    position: fixed;
    background-color: #e8e8e8;
    bottom: 0;
    width: 100%;
    color: black;
    border-top: 1px solid black;
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .grid-content {
      border-radius: .4rem;
      min-height: .36rem;
      font-weight: bold;
      text-align: center;
    }
    .row-bg {
      padding: .2rem 0;
    }
  }
</style>
