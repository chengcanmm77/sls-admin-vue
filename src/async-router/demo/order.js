/**
 * Created by sailengsi on 2017/5/11.
 */


import {Content} from 'layout/';

export default {
	path: 'order',
	name: '订单管理',
	icon: 'inbox',
	component: Content,
	redirect: '/demo/order/list',
	children: [{
		path: 'list',
		name: '订单列表',
		icon: 'reorder',
		component: resolve=>{
			require(['views/demo/order/list/'], resolve);
		}
	}, {
		path: 'edit',
		name: '编辑订单',
		icon: 'edit',
		component: resolve=>{
			require(['views/demo/order/edit/'], resolve);
		}
	}]
};