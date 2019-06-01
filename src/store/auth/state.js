import { LocalStorage } from 'quasar'

const token = LocalStorage.getItem('token') || null

export default {
	cached: {
		token,
		user: null
	},
	loading: {
		token: false
	}
}
