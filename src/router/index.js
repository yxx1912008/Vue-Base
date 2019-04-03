import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/'
import login from '@/components/login/'
import main from '@/components/index/main'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: '登录界面',
			component: login
		},
		{
			path: '/index',
			name: '首页',
			component: index,
			children: [{
				path: '/index/main',
				name: '主页',
				component: main
			}]
		},

	]
})
