<template>
  <div class="index">
    <mHeader></mHeader>
    <div class="content">
      <active></active>
      <hotBaby></hotBaby>
      <hotNews></hotNews>
    </div>
    <tool></tool>
  </div>
</template>

<script>
  import mHeader from 'common/modules/header';
  import hotBaby from './HotBaby';
  import hotNews from './HotNews';
  import active from './Active';
  import tool from './Tool';
  export default {
    components: {
      mHeader,
      hotBaby,
      hotNews,
      active,
      tool
    },
    data () {
      return {
        is_h5: HFE_FLIGHT.is_h5
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
    .content {
      margin-top: .2rem;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      position: absolute;
      padding-bottom: .8rem;
    }
  }
</style>
