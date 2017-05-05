<template>
  <div class="hot-news">
    <el-row class="title">热门新闻{{is_h5}}</el-row>
    <el-row>
      <el-col :span="24" v-for="(item, index) in news" :key="index">
        <div class="grid-content bg-purple-dark">
          <div>{{item.title}}</div>
          <div class="operate">
            <el-button @click.ctrl="zan">点赞(2)</el-button>
            <el-button>评论(11)</el-button>
            <el-button>查看(3)</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  export default {
    data () {
      return {
        is_h5: HFE_FLIGHT.is_h5,
        msg: '',
        currentDate: new Date()
      };
    },
    computed: mapState({
      news: state => state.index.news
    }),
    methods: {
      ...mapActions([
        'getHotNews'
      ]),
      zan () {
        console.log(111);
      }
    },
    created () {
      this.getHotNews('111');
    }
  };
</script>

<style lang="scss" scoped>
  .hot-news {
    margin-top: .2rem;
    background-color: #fff;
    padding: .2rem 0 0.2rem 0;
    .info {
      margin-top: .2rem;
    }
    .el-col {
      border-radius: .2rem;
    }
    .bg-purple-dark {
      background: #F8F8FF;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      color: black;
      border-radius: .15rem;
      padding: .3rem;
      margin-top: .1rem;
      min-height: .36rem;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    .operate {
      text-align: right;
    }
  }
</style>
