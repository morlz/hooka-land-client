import { LocalStorage } from 'quasar'

export async function createOrder ({ commit }, form) {
	const { data: item } = await this._vm.$axios.post(`/order/create`, {
		...form,
		products: LocalStorage.getItem('cart-items')
	})

	commit('cart/removeAll', null, { root: true })
}


