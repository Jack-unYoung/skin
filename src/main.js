// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import Element from 'element-ui'
import echarts from "echarts";

Vue.prototype.$echarts = echarts;
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../src/assets/style.css'
import './theme/index.css'
import Content from '../src/components/Content.vue'
import detail from '../src/components/detail.vue'
import Footer from '../src/components/Footer.vue'
import Header from '../src/components/Header.vue'
import team from '../src/components/team.vue'
import gover from '../src/components/gover.vue'


Vue.use(Element)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
    routes: [
		{path:'/',redirect:'/index'},
		{path:'/index',component:Content},
		{path: '/detail', component: detail ,
		children:[
			{path:'/team',component:team},
			{path:'/governance',component:gover}
		]
		}
    ],
    mode: "history"
})

// // 全局注册组件
Vue.component("App", App);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
