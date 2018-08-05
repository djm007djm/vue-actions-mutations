
<template>
    <div ref = "container" class="app-home-banner swiper-container">
       <div class="swiper-wrapper">
           <div v-for = "slide in slideList" :key = "slide.si_id" class="swiper-slide">
               <img  :src="'http://image.juooo.com/' + slide.touch_image_url">
           </div>
       </div>
       <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
    name: 'app-home-banner',
    data () {
        return {
            slideList: []
        }
    },
    methods: {
        getSlideList () {
            this.$Post({
                url: '/index/getNationalSildeList',
                data: {
                    'confType': 'L',
                    'isSymbol': 1,
                    'limit': 6
                }
            }).then(res => {
                console.log(res.data)
                this.slideList = res.data.data

                //里面的回调函数会在上一次数据更改所引起的dom更新完成后触发
                Vue.nextTick(() => {
                    new Swiper(this.$refs.container, {
                        pagination: {el: '.swiper-pagination'}
                    })
                })
                
            })
        }
    },
    created () {
        this.getSlideList()
    },
    // watch: {
    //     slideList () {
    //         //在这里也不行，因为数据刚刚变化，dom还没有更新
    //         // new Swiper('.app-home-banner', {
    //         //     pagination: {el: '.swiper-pagination'}
    //         // })
    //     }
    // },
    updated () {
        //在这里实例化swiper，因为数据变化引起的dom更新一集完成了
        // 如果数据不断变化，也可能会收到其他无关的数据音像，导致多次实例化
        // if ( !this.swiper ) {
        //     this.swiper = new Swiper('.app-home-banner', {
        //         pagination: {el: '.swiper-pagination'}
        //     })
        // }
        
    },
    mounted () {
        //如果写在mounted中，这个时候数据还没有获取到，dom中还不存在swiper-slide
        // new Swiper('.app-home-banner', {
        //     pagination: {el: '.swiper-pagination'}
        // })
    }
}
</script>

<style lang="scss" scoped>
    .app-home-banner {
       
       .swiper-slide {
           width: 100%;
           height: 3.1rem;
       }
    }
</style>
