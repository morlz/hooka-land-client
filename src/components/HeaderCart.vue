<template>
	<div class="HeaderCart">
		<q-btn
			class="shadow-8"
			color="primary"
			icon="shopping_cart"
			round
		>
			<q-badge
				color="red"
				floating
				transparent
				v-text="cartItemsCount"
			/>

			<q-popup-proxy>
				<q-card>
					<q-card-section>
						<div class="text-h4">Корзина</div>
						<div class="text-h6">В корзине {{ cartItemsCount }} товаров на сумму {{ cartItemsSum }} руб</div>
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

					<q-separator/>

					<q-card-actions>
						<q-btn
							:disabled="!cartItemsCount"
							color="primary"
							icon="check"
							label="Оформить заказ"
							to="/order-create"
						/>
					</q-card-actions>

					<q-inner-loading :showing="loading">
						<q-spinner-gears
							color="primary"
							size="50px"
						/>
					</q-inner-loading>
				</q-card>
			</q-popup-proxy>
		</q-btn>
	</div>
</template>


<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

import ProductItemMini from './ProductItemMini'

export default {
	components: {
		ProductItemMini
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
		...mapActions('cart', [
			'init',
		]),
	},

	created () {
		this.init()
	}
}
</script>

<style lang="stylus">
.HeaderCart
	position fixed
	top 24px
	right 24px 
	z-index 2000


</style>
