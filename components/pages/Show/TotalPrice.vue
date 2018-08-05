
<template>
    <div class="app-cart-total-price">
        <h4>
            总价钱：  {{cart_total_price.price}}
            总数量：  {{cart_total_price.num}}
        </h4>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'app-cart-total-price',
    computed: mapGetters(['cart_total_price']),
    mounted () {
        console.log(this.$store.getters.cart_total_price)
    }
}
</script>

<style lang="scss" scoped>
   .app-cart-total-price {
      padding: 0.3rem;
      background: #fff;
      margin-top: 0.3rem;
   } 
</style>
