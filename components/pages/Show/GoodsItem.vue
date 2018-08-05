
<template>
    <li class="app-home-goods-item">
        <div class="info">
            <h4 class="title">{{data.name}}</h4>
            <p>单价：{{ data.price | goodPrice }}</p>
        </div>
        <div class="control">
            <button @click = "reduceGood"  class="add btn btn-primary">-</button>
            {{ data.num }}
            <button @click="addGood" class="add btn btn-primary">+</button>
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'app-home-goods-item',
    props: ['data'],
    computed: {
        // ...mapState(['commons'])
        ...mapState({
            userinfo: (state) => {
                return state.commons.userInfo
            } 
        })
        // userInfo () {
        //     return this.$store.state.commons.userInfo
        // }
    },
    methods: {
        ...mapActions(['reduceGoodFromCart']),
        addGood () {
            if ( !this.userinfo ) {
                alert('请登陆后操作')
                this.$router.push('/login')
                return false;
            }
            let _data = Object.assign({}, this.data)
            _data.num = 1
            this.$store.dispatch('addGoodInCart', {
                goodinfo: _data,
                success: () => {
                    console.log('加入成功')
                }
            })
        },
        reduceGood () {
            this.reduceGoodFromCart({ id: this.data.id, success: () => {
                console.log('减去成功')
            }})
        }
    }
}
</script>

<style lang="scss" scoped>

    .app-home-goods-item {
        display: flex;
        align-items: center;
        padding: 0.2rem 0px;
        border-bottom: 1px dashed #e2e2e2;
        .info {
            width: 60%;
            flex-grow: 0;flex-shrink: 0;
            .title {
                font-size: 0.32rem;
                color: #333;
                margin-bottom: 0.2rem;
            }
            p {
                font-size: 0.24rem;
            }
        }
        .control {
            flex-grow: 1;flex-shrink: 1;
            display: flex;
            justify-content: space-between;
        }
    }

</style>
