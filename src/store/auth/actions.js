import { LocalStorage } from 'quasar'

export async function signIn ({ commit }, form) {
	commit('loadingSet', { token: true })

	const { data } = await this._vm.$axios.post(`/signin`, form)
	const { token, user } = data

	commit('cachedSet', {
		token: token.token,
		user
	})

	LocalStorage.set('token', token)

	// this._vm.$axios.defaults.headers.common['Authorization'] = [type, token].join(' ')

	commit('loadingSet', { token: false })
}

