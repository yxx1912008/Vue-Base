import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/'
import login from '@/components/login/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录界面',
      component: login
    },
		{
		  path: '/index',
		  name: '首页',
		  component: index
		}
  ]
})
