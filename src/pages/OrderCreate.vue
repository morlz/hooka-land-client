<template>
	<q-page class="OrderCreate">
		<q-card class="OrderCreate__card">
			<q-card-section>
				<div class="text-h4">Создание заказа</div>
			</q-card-section>

			<q-card-section>
				<q-list separator>
					<product-item-mini
						:content="content"
						:key="id"
						v-for="content, id, index in items"
					/>
				</q-list>
			</q-card-section>

			<q-card-section
				class="q-gutter-md"
				style="max-width: 300px"
			>
				<div class="text-h6">Итого: {{ cartItemsCount }} товаров на сумму {{ cartItemsSum }} руб</div>

				<q-input
					filled
					label="Имя"
					v-model="client.name"
				/>

				<q-input
					filled
					label="Телефон"
					v-model="client.phone"
				/>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					:disabled="!cartItemsCount"
					@click="__createOrder"
					color="primary"
					icon="check"
					label="Оформить заказ"
				/>
			</q-card-actions>

			<q-inner-loading :showing="loading">
				<q-spinner-gears
					color="primary"
					size="50px"
				/>
			</q-inner-loading>
		</q-card>
	</q-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'


import ProductItemMini from 'components/ProductItemMini'

export default {
	components: {
		ProductItemMini
	},
	data () {
		return {
			client: {
				name: '',
				phone: ''
			}
		}
	},
	computed: {
		...mapGetters('cart', {
			cartItemsCount: 'length',
			cartItemsSum: 'sum',
			items: 'items'
		}),
		...mapState('cart', {
			loading: state => state.loading.items
		})
	},
	methods: {
		...mapActions('orders', [
			'createOrder'
		]),
		__createOrder () {
			this.createOrder(this.client)
		}
	},
	created () {

	}
}
</script>

<style lang="stylus">
.OrderCreate
	&__card
		max-width 700px
		margin 50px auto

</style>

