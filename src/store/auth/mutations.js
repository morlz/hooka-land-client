import { LocalStorage } from 'quasar'


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


