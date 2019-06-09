export async function createCategory ({ commit, dispatch }, form) {
	const { data: items } = await this._vm.$axios.post('/categories', form)

	await dispatch('groups/getGroups', null, { root: true })
}

export async function removeCategory ({ commit, dispatch }, categoryID) {
	const { data: items } = await this._vm.$axios.delete(`/categories/${categoryID}`)

	await dispatch('groups/getGroups', null, { root: true })
}
