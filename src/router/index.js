import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home.vue'
import Find from '@/components/module/Find.vue'
import Order from '@/components/module/Order.vue'
import My from '@/components/module/My.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
