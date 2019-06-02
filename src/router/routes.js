
const routes = [
	{
		path: '/',
		component: () => import('layouts/Default'),
		children: [
			{ name: 'home', path: '', component: () => import('pages/Index') },
			{ name: 'auth', path: '/auth', component: () => import('pages/Auth') },
			{ name: 'group', path: '/group/:group/:page?', component: () => import('pages/Products') },
			{ name: 'category', path: '/category/:category/:page?', component: () => import('pages/Products') },
			{ name: 'order-create', path: '/order-create', component: () => import('pages/OrderCreate') },
			{ name: 'group-admin', path: '/group-admin', component: () => import('pages/GroupAdmin') },
			{ name: 'category-admin', path: '/group-admin', component: () => import('pages/CategoryAdmin') },
			{ name: 'product-admin', path: '/product-admin', component: () => import('pages/ProductAdmin') },
		]
	}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	})
}

export default routes
