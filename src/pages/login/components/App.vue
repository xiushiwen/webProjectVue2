<template>
    <div class="login">
        <m-header></m-header>
        <div class="content">
            <tab></tab>
            <search></search>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script>
    import mHeader from './Header';
    import mFooter from './Footer';
    import tab from './Tab';
    import search from './Search';
    export default {
        components: {
            mHeader,
            mFooter,
            tab,
            search
        },
        data () {
            return {
                title: '登陆',
                operate: '注册'
            };
        },
        methods: {
            // todo
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    html,body {
        overflow: hidden;
    }
    .login {
        -webkit-overflow-scrolling: touch;
        .content {
            padding-left: .3rem;
            padding-right: .3rem;
        }
    }
</style>
