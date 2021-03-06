import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import auth from './auth'
import groups from './groups'
import products from './products'
import categories from './categories'
import orders from './orders'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		modules: {
			cart,
			auth,
			groups,
			products,
			categories,
			orders
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV
	})

	return Store
}
