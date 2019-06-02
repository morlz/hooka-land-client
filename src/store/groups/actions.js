export async function create ({ commit, dispatch }, form) {
	const { data: items } = await this._vm.$axios.post('/groups', form)

	await dispatch('getGroups')
}

export async function remove ({ commit, dispatch }, groupID) {
	const { data: items } = await this._vm.$axios.delete(`/groups/${groupID}`)

	await dispatch('getGroups')
}

export async function getGroups ({ commit }) {
	const { data } = await this._vm.$axios.get('/groups')

	commit('cachedSet', data)
}

