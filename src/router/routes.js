
const routes = [
	{
		path: '/',
		component: () => import('layouts/Default'),
		children: [
			{ name: 'home', path: '', component: () => import('pages/Index') },
			{ name: 'group', path: '/group/:group/:page?', component: () => import('pages/Items') },
			{ name: 'category', path: '/category/:category/:page?', component: () => import('pages/Items') },
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
