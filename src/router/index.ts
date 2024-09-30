import {createRouter, createWebHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import(`../views/Home.vue`)),
      meta: {
        title: '首页',
      },
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: defineAsyncComponent(() => import(`../views/Login.vue`)),
      meta: {
        title: '登录',
      },
    },
    // {
    //   path: '/*',
    //   redirect: '/',
    // },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title} | My Xiaobao`;
  }
  next()
})

router.afterEach((to, from)=>{
  // console.log(to, from)
  console.log('afterEach')
})

export default router