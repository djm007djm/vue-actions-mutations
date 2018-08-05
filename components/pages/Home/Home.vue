
<template>
    <div class="app-home page">
        <app-home-banner></app-home-banner>

        <app-home-goods-list></app-home-goods-list>

        <app-nav></app-nav>
    </div>
</template>

<script>
import AppHomeGoodsList from './GoodsList'
import AppHomeBanner from './Banner'
export default {
    name: 'app-home',
    components: { AppHomeBanner, AppHomeGoodsList },
    activated () {
        console.log('回到首页了')
    },
    deactivated () {
        console.log('离开首页了')
    }
}
</script>

<style lang="scss">
   
</style>
