import { LocalStorage } from 'quasar'

const items = LocalStorage.getItem('cart-items') || []

export default {
	items, 
	cached: {
		items: []
	},
	loading: {
		items: false
	}
}
