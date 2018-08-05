
<template>
    <footer class="app-footer">
        <router-link exact active-class="active" :to = "nav.path" class="nav-item" v-for = " nav in navs " :key = " nav.id ">
            <span>{{ nav.title }}</span>
        </router-link>
    </footer>
</template>
<script>

export default {
    name: 'app-footer',
    data () {
        return {
            navs: [
                {id: 1, title: '首页', path: '/'},
                {id: 2, title: '购物车', path: '/show'},
                {id: 3, title: '我的', path: '/mine'}
            ]
        }
    }
}
</script>
<style lang="scss">
    @import '../../../stylesheets/_base.scss';
    .app-footer {
        height: 1rem;
        border: 1px solid $base-gray-color;
        position: fixed;
        bottom: 0;width: 100%;
        background: #fff;
        display: flex;

        .nav-item {
            flex-grow: 1;
            display: flex;justify-content: center;align-items: center;

            color: #333;

            &.active {
                color: $base-color;
            }

        }
    }



</style>


