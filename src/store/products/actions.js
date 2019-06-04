import { pick } from 'lodash'

import { Notify } from 'quasar'

export async function create ({ commit, dispatch }, form) {
	const { data } = await this._vm.$axios.post('/products', {
		...pick(form, ['name', 'description', 'img', 'unit', 'price']),
		category_id: form.group.value
	})

	Notify.create({
		message: 'Товар добавлен'
	})
}

export async function deleteProduct ({ commit, dispatch }, id) {
	const { data } = await this._vm.$axios.delete(`/products/${id}`)

	Notify.create({
		message: 'Товар удалён'
	})

	return true
}

