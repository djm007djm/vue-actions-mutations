
<template>
    <div class="app-login page-top">
        <app-common-header></app-common-header>

        <input v-model = "username" type="text" placeholder="输入手机号">
        <input v-model = "password" type="text" placeholder="输入验证码">
        
        <button @click = "login">登陆</button>
        

    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'app-login',
    data () {
        return {
            username: '18335832151',
            password: '123456'
        }
    },
    methods: {
        ...mapActions(['getInitialCart']),
        ...mapActions({
            action_login: 'login'
        }),
        login () {
            //只有要通过异步操作后更改store的state的时候，这个异步动作放在actuions
            //在action中只能放入一些数据交互的代码
            this.action_login({
                username: this.username,
                password: this.password,
                success:() => {
                    //登陆之后跳转到我的，获取一下的用户的购物车信息
                    this.getInitialCart()
                    this.$router.push('/mine')
                },
                fail () {
                    alert('登陆失败')
                }
            })
            // this.$store.dispatch('login', {
            //     username: this.username,
            //     password: this.password,
            //     success:() => {
            //         this.$router.push('/mine')
            //     },
            //     fail () {
            //         alert('登陆失败')
            //     }
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-login{
        input, button {
            width: 100%;
            height: 0.8rem;
            font-size: 0.32rem;
        }
    }
</style>


