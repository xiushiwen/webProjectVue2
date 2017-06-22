<template>
    <div class="search">
        <div class="userLogin" v-show="loginType === 'user' && operate === 1">
            <div class="username">
                <i class="person"></i>
                <el-input v-model="username" placeholder="请输入您的手机号码/邮箱/用户名"></el-input>
            </div>
            <div class="password">
                <i class="code"></i>
                <el-input v-model="password" :type="inputType" placeholder="请输入密码"></el-input>
                <i @click.stop="changeEye" :class="{'eyeClose': !eye, 'eyeOpen': eye}"></i>
            </div>
        </div>
        <div class="messageLogin" v-show="loginType === 'message' && operate === 1">
            <div class="username">
                <i class="mobile"></i>
                <el-input v-model="username" placeholder="请输入您的手机号码"></el-input>
            </div>
            <div class="password">
                <i class="verify"></i>
                <el-input v-model="password" placeholder="请输入验证码"></el-input>
            </div>
            <div>
                <button class="validBtn noBorderRight">短信验证</button><button class="validBtn">语音验证</button>
            </div>
        </div>
        <div>
            <button @click="submit" class="submit">登陆</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data () {
            return {
                username: '',
                password: '',
                inputType: 'password',
                eye: false
            };
        },
        methods: {
            changeEye () {
                this.eye = !this.eye;
                this.inputType = this.eye ? 'text' : 'password';
            },
            submit () {
                // todo;
            }
        },
        computed: mapState({
            loginType: state => state.login.loginType,
            operate: state => state.login.operate
        })
    };
</script>

<style lang="scss">
    .search {
        -webkit-overflow-scrolling: touch;
        position: relative;
        margin-top: .8rem;
        i {
            top: .23rem;
            z-index: 1;
            position: absolute;
            background-size: 3.48rem 1.6rem;
            background-image: url('~assets/login_icon.png');
            &.person {
                left: .2rem;
                width: .4rem;
                height: .4rem;
                background-position: .68rem -.18rem;
            }
            &.code {
                left: .2rem;
                width: .4rem;
                height: .4rem;
                background-position: 2.44rem -.18rem;
            }
            &.eyeClose {
                right: .2rem;
                width: .52rem;
                height: .36rem;
                background-position: -1.86rem -1rem;
            }
            &.eyeOpen {
                right: .2rem;
                width: .52rem;
                height: .36rem;
                background-position: -1rem -1rem;
            }
            &.mobile {
                left: .2rem;
                width: .4rem;
                height: .4rem;
                background-position: 3.28rem -.18rem;
            }
            &.verify {
                left: .2rem;
                width: .4rem;
                height: .4rem;
                background-position: 1.58rem -.18rem;
            }
        }
        .username, .password{
            margin-bottom: .6rem;
            position: relative;
        }
        .password {
            .el-input__inner {
                padding-right: .7rem;
            }
        }
        .el-input__inner {
            padding-left: .8rem;
            line-height: .8rem;
            height: .9rem;
            font-size: .28rem;
        }
        .submit {
            margin-top: .8rem;
            width: 100%;
            height: .9rem;
            border: 0;
            outline: 0;
            font-size: .4rem;
            background-color: #1998ff;
            color: #fff;
            border-radius: .02rem;
        }
        .validBtn {
            margin-top: .3rem;
            width: 50%;
            height: .8rem;
            line-height: .8rem;
            border: solid .02rem #4789FF;
            font-size: .32rem;
            background-color: #f6f6f6;
            color: #1998ff;
            &.noBorderRight {
                border-right: none;
            }
        }
        
    }
</style>
