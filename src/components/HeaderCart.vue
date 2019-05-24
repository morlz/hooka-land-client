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
							<q-item
								:key="id"
								class="HeaderCartItem"
								v-for="{ count, value }, id, index in items"
							>
								<q-inner-loading :showing="!value">
									<q-spinner-gears
										color="primary"
										size="50px"
									/>
								</q-inner-loading>

								<template v-if="value">
									<q-item-section avatar>
										<q-avatar>
											<img
												:src="value.img"
												v-if="value.img"
											>
										</q-avatar>
									</q-item-section>

									<q-item-section>
										<q-item-label>{{ value.name }}</q-item-label>
										<q-item-label>{{ value.description }}</q-item-label>
									</q-item-section>

									<q-item-section side>
										<q-item-label>
											<span>{{ count }}</span> шт по
											<span>{{ value.price }}</span> руб
										</q-item-label>

										<q-item-label>
											Итого
											<span>{{ value.price * count }}</span> руб.
										</q-item-label>
									</q-item-section>

									<q-item-section side>
										<q-btn
											@click="removeItem(id)"
											color="negative"
											flat
											icon="delete"
											round
										/>
									</q-item-section>
								</template>
							</q-item>
						</q-list>
					</q-card-section>

					<q-separator/>

					<q-card-actions>
						<q-btn
							:disabled="!cartItemsCount"
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
			</q-popup-proxy>
		</q-btn>
	</div>
</template>


<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
	data () {
		return {

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
		...mapActions('cart', [
			'init',
		]),
		...mapMutations('cart', [
			'removeItem',
		])
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

.HeaderCartItem
	position relative
	span
		font-weight bold
</style>
