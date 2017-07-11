<template>
    <div class="login" :class="{'appLogin': fromPage === 'app', 'h5Login': fromPage === 'h5'}">
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
                is_h5: GLOBALS_LOGIN.is_h5,
                fromPage: GLOBALS_LOGIN.from_page
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
