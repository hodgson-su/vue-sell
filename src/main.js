import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

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