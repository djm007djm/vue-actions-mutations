
<template>
    <div class="app-home-goods-list">
        <h4> 正在热卖 </h4>
        <ul class="goods-list">
            <app-home-goods-item
                v-for = " good in goods "
                :key = " good.id "
                :data = " good "
            ></app-home-goods-item>
        </ul>
    </div>
</template>

<script>
import AppHomeGoodsItem from './GoodsItem'
export default {
    name: 'app-home-goods-list',
    data () {
        return {
            goods: []
        }
    },
    methods: {
        getGoods () {
            this.$http.get('/static/json/goods.json').then(res => {
                this.goods = res.data
                console.log(res.data)
            })
        }
    },
    created () {
        this.getGoods()
    },
    components: {
        AppHomeGoodsItem
    }
}
</script>

<style lang="scss" scoped>

    .app-home-goods-list {
        background: #fff;
        margin-top: 0.3rem;
        padding: 0.3rem;
        h4 {
            margin-bottom: 0.3rem;
        }
    }

</style>
