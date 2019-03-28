import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 页面重定向首页
    {
      path: '/',
      redirect: '/home'
    },
    // 首页部分
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home/home'], resolve),
      meta: { title: '首页', keepAlive: true, }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: resolve => require(['@/views/home/recommend'], resolve),
      meta: { title: '推荐' }
    },
    // 任务大厅部分
    {
      path: '/missionList',
      name: 'mission',
      component: resolve => require(['@/views/mission/missionList'], resolve),
      meta: { title: '任务大厅', keepAlive: true, }
    },
    {
      path: '/missionDetail',
      component: resolve => require(['@/views/mission/missionDetail'], resolve),
      meta: { title: '任务详情', }
    },
    // 商城部分
    {
      path: '/shop',
      name: 'shop',
      component: resolve => require(['@/views/shop/shop'], resolve),
      meta: { title: '商城', keepAlive: true, }
    },
    {
      path: '/shop/list',
      name: 'shoplist',
      component: resolve => require(['@/views/shop/shoplist'], resolve),
      meta: { title: '商品列表' }
    },
    {
      path: '/shop/detail',
      name: 'shopdetail',
      component: resolve => require(['@/views/shop/shopdetail'], resolve),
      meta: { title: '商品详情页' }
    },
    {
      path: '/confirmOrder',
      component: resolve => require(['@/views/confirmOrder/confirmOrder'], resolve),
      meta: { title: '确认订单' }
    },
    // 个人中心部分
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/views/user/user'], resolve),
      meta: { title: '个人中心', keepAlive: true, }
    },
    {
      path: '/taskrelease',
      redirect: '/taskrelease/url',
      component: resolve => require(['@/views/user/taskrelease'], resolve),
      meta: { title: '发布任务' },
      children: [
        {
          path: '/taskrelease/url',
          name: 'url',
          component: resolve => require(['@/components/task/releaseurl'], resolve),
          meta: { title: '发布链接' }
        },
        {
          path: '/taskrelease/test',
          name: 'text',
          component: resolve => require(['@/components/task/releasetext'], resolve),
          meta: { title: '发布文本' }
        },
      ]
    },
    {
      path: '/myCoin',
      component: resolve => require(['@/views/user/myCoin'], resolve),
      meta: { title: '我的金币' }
    },
    {
      path: '/balance',
      component: resolve => require(['@/views/user/balance/balance'], resolve),
      meta: { title: '账户余额' }
    },
    {
      path: '/balance/getCash',
      component: resolve => require(['@/views/user/balance/getCash'], resolve),
      meta: { title: '账户余额' }
    },
    {
      path: '/user/addfile',
      name: 'file',
      component: resolve => require(['@/views/addfile'], resolve),
      meta: { title: '添加文档' }
    },
    {
      path: '/user/bindphone',
      component: resolve => require(['@/views/user/bindphone'], resolve),
      meta: { title: '绑定手机' }
    },
    {
      path: '/user/invite',
      component: resolve => require(['@/views/user/invite'], resolve),
      meta: { title: '邀请好友' }
    },
    // 任务管理部分
    {
      path: '/taskManageList',
      component: resolve => require(['@/views/user/taskManage/taskManageList'], resolve),
      meta: { title: '任务管理' }
    },
    {
      path: '/taskManageDetail',
      component: resolve => require(['@/views/user/taskManage/taskManageDetail'], resolve),
      meta: { title: '任务详情' }
    },
    {
      path: '/user/addurl',
      name: 'addurl',
      component: resolve => require(['@/views/addurl'], resolve),
      meta: { title: '添加链接' }
    },
    {
      path: '/user/addimage',
      name: 'addimage',
      component: resolve => require(['@/views/addimage'], resolve),
      meta: { title: '添加图片' }
    },
    // 500
    {
      path: '/500',
      name: '500',
      component: resolve => require(['@/views/500'], resolve),
      meta: { title: '服务器出错' }
    },
    // 404
    {
      path: '*',
      component: resolve => require(['@/views/404'], resolve),
      meta: { title: '页面走丢了' }
    },
  ],
  // 防止缓存页面滚动
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
