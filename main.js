// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'swiper/dist/css/swiper.min.css'

//rem计算
import './modules/rem'

// import FastClick from 'fastclick'
// FastClick.attach(document.body);

//全局注册某些组件
import './modules/component'

//全局配置的样式
import './stylesheets/main.scss';

//store
import store from './store'
//axios
import axios from 'axios'
import Post from './modules/post'

//filter
import './modules/filters'

//cooki
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)


Vue.prototype.$Post = Post
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//所有的组件都能用到this.$router和this.$route
  store,//所有的组件都能用到this.$store
  components: { App },
  template: '<App/>'
})



//组件的生命周期

//三个阶段： 初始化，运行中，销毁

// 当我们使用组件时候，其实就会new组件，这个时候组件就会经历初始化阶段，这个时候组件去初始化生命周期和事件等等
// 然后就会执行 beforeCreate钩子函数，无法使用数据，无法使用dom，没啥用
// 组件就会去挂载数据...然后执行created，在这个时候已经能使用数据或者修改数据，且在这里更改数据不会触发update..
// 所以经常在created里做一些初始化数据获取的动作
// 接下来就去寻找组件或者实例的模板，并进行编译
// 然后执行beforeMount，即将要渲染了，也能使用数据，没有dom，改数据的话不会引起update
// 组件渲染了模板，执行了mounted，既能使用数据，又能操作dom


// 在运行的过程中，当数据改变会马上执行beforeUpdate，没有什么用
// 然后数据变化了，执行setter了，执行watcher啦，创建新的虚拟dom了，与上一次的对比啦，重新渲染啦
// 执行updated 操作更改后真实dom


//当组件销毁的时候 （调用$destroy）马上执行beforeDestroy，可以做一些善后的工作，取消一些事件监听、清楚一些定时器..
//然后vue会将组件的数据绑定、事件监听都去掉，然后执行destroyed








//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG




