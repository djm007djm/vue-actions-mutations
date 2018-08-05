
<template>
    <div class="app-show page">
        
        <h4 v-if = "!userInfo" class="message">
            请登陆后操作
        </h4>
        <div v-else>
            <app-cart-goods-item
                v-for = " good in cart "
                :key = " good.id "
                :data = " good "
            ></app-cart-goods-item>

            <app-cart-total-price></app-cart-total-price>
        </div>

        <app-nav></app-nav>
    </div>
</template>

<script>
import AppCartGoodsItem from './GoodsItem'
import AppCartTotalPrice from './TotalPrice'
import { mapState } from 'vuex'
export default {
    name: 'app-show',
    components: { AppCartGoodsItem, AppCartTotalPrice },
    computed: {
        userInfo () {
            return this.$store.state.commons.userInfo
        },
        ...mapState({
            cart: state => state.cart.cart
        })
    }
}
</script>

<style lang="scss" scoped>
   .app-show {
       .message {
           padding: 0.3rem;

           text-align: center;
       }
   } 
</style>
