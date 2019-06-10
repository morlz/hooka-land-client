import { LocalStorage } from 'quasar'

export function addItem (state, item) {
	state.items.push(item)
	LocalStorage.set('cart-items', state.items)
}

export function removeItem (state, item) {
	state.items.splice(state.items.indexOf(item), 1)
	LocalStorage.set('cart-items', state.items)
}

export function removeAll (state) {
	state.items = []
	LocalStorage.remove('cart-items')
}

export function cachedSet (state, payload) {
	state.cached = {
		...state.cached,
		...payload
	}
}

export function loadingSet (state, payload) {
	state.loading = {
		...state.loading,
		...payload
	}
}

export function cacheAppend (state, payload) {
	state.cached.items.push(payload)
}


