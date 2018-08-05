import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Mine from '@/components/pages/Mine/Mine'
import Show from '@/components/pages/Show/Show'
import store from '../store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   console.log('要进入首页了')
      //   next()
      // }
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})


router.beforeEach((to, from ,next) => {
  if ( to.name === 'mine' && !store.state.commons.userInfo) {
    next('/login')
    return false;
  }
  next()
})

//activated deactivated

export default router
