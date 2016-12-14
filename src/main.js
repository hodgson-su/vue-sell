import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';


let router = new VueRouter({
	linkActiveClass:'active',
	routes:[
		{
			path:'',component:App,
			children: [
				{
					path:'goods',
					component:goods
				},
				{
					path:'ratings',
					component:ratings
				},
				{
					path:'seller',
					component:seller
				}
			]
		}
	]
})

let app = new Vue({
	router
}).$mount('#app');

router.push('/goods');