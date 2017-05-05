<template>
  <div class="hot-baby">
    <el-row class="title">热门宝贝</el-row>
    <el-row class="info">
      <el-col :span="10" v-for="(o, index) in 2" :key="index" :offset="index%2 > 0 ? 2 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="~assets/logo.png" class="image"></img>
          <div class="text-div">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentDate: new Date()
      };
    }
  };
</script>

<style lang="scss" scoped>
  .hot-baby {
    margin-top: .2rem;
    background-color: #ffffff;
    padding: .2rem 0 0.2rem 0;
    .info {
      margin-top: .2rem;
    }
    .text-div {
      padding: .14rem;
    }
    .time {
      font-size: .13rem;
      color: #999;
    }

    .bottom {
      margin-top: .13rem;
      line-height: .12rem;
    }

    .button {
      padding: 0;
      float: right;
      font-size: .14rem;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }
  }
</style>
