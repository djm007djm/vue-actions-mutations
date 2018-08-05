
1. 配置sass编译环境

    安装node-sass sass-loader

2. 安装一些项目中需要使用的

    swiper， axios， mint-ui

3. vuex是一个状态管理工具

    利用vuex可以创建一些工具，比如store，我们就可以在store中存储一些数据，而这些数据可以被所有的组件共享

    因为vuex是唯一数据源的，意思就是 只能有一个store

    因为协同开发的时候，每一个开发者都会有自己的状态需要管理，所以最后分开模块去做

    每个模块中拥有state（存储状态），getters（派生状态），actions(异步操作)，mutations（更改状态）

    在根实例中注入store

4. 路由权限拦截，当没有登陆的时候不许去mine，去login

    在路由跳转的时候去检测，如果是去/mine的，而且没有登陆，那就拦截下来

    * 全局路由钩子

    给路由对象挂载方法: router.beforeEach, router.afterEach

    局部路由钩子

    写在路由的配置中

    * 组件路由钩子

    在组件中写入
    beforeRouteEnter
    beforeRouteLeave
    beforeRouteUpdate