<template>
    <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号登陆" name="user">账号登陆</el-tab-pane>
            <el-tab-pane label="短信登陆" name="message">短信登陆</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    
    export default {
        data () {
            return {
                activeName: 'user'
            };
        },
        methods: {
            ...mapActions([
                'updateInfo'
            ]),
            handleClick () {
                this.updateInfo({name: 'loginType', val: this.activeName});
            }
        }
    };
</script>

<style lang="scss">
    .tab {
        .el-tabs__nav {
            padding-top: .66rem;
            width: 100%;
        }
        .el-tabs__item {
            line-height: .7rem;
            height: .7rem;
            font-size: .34rem;
            width: 50%;
            text-align: center;
        }
        .el-tabs__content {
            display: none;
        }
    }
</style>
