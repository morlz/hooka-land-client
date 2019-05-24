export async function init ({ state, commit }) {
	commit('loadingSet', { items: true })
	const { data: items } = await this._vm.$axios.get('products', [...new Set(state.items)])
	commit('loadingSet', { items: false })
	commit('cachedSet', { items })
}

export async function addItem ({ commit }, itemID) {
	commit('addItem', itemID)
	commit('loadingSet', { items: true })
	const { data: item } = await this._vm.$axios.get('product', itemID)
	commit('cacheAppend', item)
	commit('loadingSet', { items: false })
}


