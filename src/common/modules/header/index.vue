<template>
    <div class="header">
        <div class="item">{{title}}</div>
        <i class="el-icon-more"></i>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '宝贝社区'
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .header {
        z-index: 111;
        position: fixed;
        top: 0;
        padding-top: .2rem;
        display: inline-block;
        text-align: center;
        font-size: .35rem;
        line-height: 1rem;
        width: 100%;
        height: 1rem;
        background-color: #e8e8e8;
        color: black;
    }
    .el-icon-more {
        position: absolute;
        right: .2rem;
        top: .5rem;
    }
</style>
