<template>
  <div class="index">
    <mHeader :title="title"></mHeader>
    <div class="Center-Container">
      <div class="Absolute-Center">
        123131312313123213
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'common/modules/header';
  export default {
    components: {
      mHeader
    },
    data () {
      return {
        title: '我的宝贝'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  html,body {
    overflow: hidden;
  }
  .index {
    .title {
      padding-left: .3rem;
      font-size: .3rem;
      color: #d6e9c6;
    }
    .Center-Container {
      position: relative;
      height: 100%;  
    }  
      
    .Absolute-Center {  
      width: 50%;  
      height: 50%;  
      overflow: auto;  
      margin: auto;  
      position: absolute;  
      top: 0; left: 0; bottom: 0; right: 0;  
    }  
  }
</style>
