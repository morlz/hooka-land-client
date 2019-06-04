<template>
	<q-page class="ProductAdmin">
		<q-card class="ProductAdmin__card">
			<q-card-section>
				<div class="text-h4">Создать группу товаров</div>
			</q-card-section>

			<q-card-section class="q-gutter-md">
				<div class="ProductAdmin__inner">
					<q-select
						:options="groupOptions"
						label="Группа"
						v-model="form.group"
					/>
					<q-select
						:options="categoryOptionsValues"
						label="Категория"
						v-if="form.group"
						v-model="form.category"
					/>
				</div>

				<q-input
					filled
					label="Название"
					v-model="form.name"
				/>

				<q-input
					filled
					label="Описание"
					v-model="form.description"
				/>

				<q-input
					filled
					label="Изображение"
					v-model="form.img"
				/>

				<img
					:src="form.img"
					v-if="form.img"
				>

				<div class="ProductAdmin__inner">
					<q-input
						filled
						label="Цена"
						v-model.number="form.price"
					/>

					<q-input
						filled
						label="Ед. имз"
						v-model="form.unit"
					/>
				</div>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					:disable="!allowCreate"
					@click="create(form)"
					color="primary"
					icon="check"
					label="Добавить"
				/>
			</q-card-actions>
		</q-card>
	</q-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

import { get } from 'lodash'

export default {
	components: {

	},
	data () {
		return {
			form: {
				name: '',
				description: '',
				img: '',
				unit: '',
				price: 0,
				group: null,
				category: null
			}
		}
	},

	watch: {
		'form.group' () {
			this.form.category = null
		}
	},

	computed: {
		...mapGetters('groups', [
			'groupOptions',
			'categoryOptions'
		]),
		categoryOptionsValues () {
			return this.categoryOptions[get(this, 'form.group.value')] || []
		},
		allowCreate () {
			return [
				this.form.name,
				this.form.group,
				this.form.category,
				this.form.description,
				this.form.unit,
			].every(Boolean)
		}
	},
	methods: {
		...mapActions('products', [
			'create'
		])
	},
	created () {

	}
}
</script>

<style lang="stylus">
.ProductAdmin
	&__card
		max-width 700px
		margin 50px auto

	&__inner
		display grid
		grid-auto-flow column
		grid-gap 10px
</style>

