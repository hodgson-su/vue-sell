<template>
	<div class="cartcontrol">
		<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart" transition="move">	
			<span class="inner icon-remove_circle_outline"></span>
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';

	export default {
		props:{
			food:{
				type:Object
			}
		},
		created(){
			
		},
		methods:{
			addCart(){
				if(!event._constructed){
					return;
				}
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;

				}
			},
			decreaseCart(){
				if(!event._constructed){
					return;
				}
				if(this.food.count){
					this.food.count--;
				}else{
					
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size:0
		.cart-decrease
			display:inline-block
			padding:6px
			transition:all 0.4s linear
			&.move-transition
				opacity:1
				transform:translate3D(0,0,0)
			.inner
				display:inline-block
				line-height:24px
				font-size:24px
				color:rgb(0,160,220)
				transition:all 0.4s linear
				transform:rotate(0)
			&.move-enter,&.move-leave
				opacity:0
				transform:translate3D(24px,0,0)
				.inner
					transform:translate3D(300deg)
		.cart-count
			display:inline-block
			vertical-align:top
			width:12px
			padding-top:6px
			line-height:24px
			text-align:center
			font-size:10px
			color:rgb(147,153,159)
		.cart-add
			display:inline-block
			padding:6px
			font-size:24px
			line-height:24px
			color:rgb(0,160,220)
</style>