<template>
    <div class="header">
        {{operate === 1 ? '登陆' : '注册'}}
        <span class="operate" @click="doOperate">{{operate === 1 ? '注册' : '登陆'}}
        </span>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        data () {
            return {
                // todo
            };
        },
        computed: mapState({
            operate: state => state.login.operate
        }),
        methods: {
            ...mapActions([
                'updateInfo'
            ]),
            doOperate () {
                this.updateInfo({name: 'operate', val: this.operate === 1 ? 2 : 1});
            }
        }
    };
</script>

<style lang="scss" scoped>
    .header {
        line-height: 1rem;
        background-color: #fff;
        font-size: .36rem;
        color: #000;
        text-align: center;
        position: relative;
        .operate {
            color: #4789FF;
            font-size: .3rem;
            position: absolute;
            right: .2rem;
        }
    }
</style>
