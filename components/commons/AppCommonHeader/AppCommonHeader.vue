
<template>
    <header class="app-common-header">
        <div @click = "back" class="icon" > < </div>
    </header>
</template>
<script>

export default {
    name: 'app-common-header',
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .app-common-header {
        height: 0.87rem;
        padding: 0px 0.3rem;
        background: #fff;
        border-bottom: 1px solid rgb(218, 218, 218);
        width: 100%;
        position: fixed;
        top: 0;left: 0;
        line-height: 0.87rem;
        .icon {
            font-size: 0.4rem;
            color: #333;
        }
    }



</style>


