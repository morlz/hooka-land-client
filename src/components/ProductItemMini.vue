<template>
	<q-item class="ProductItemMini">
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
					@click="removeItem(value.id)"
					color="negative"
					flat
					icon="delete"
					round
				/>
			</q-item-section>
		</template>
	</q-item>
</template>

<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'


export default {
	props: {
		content: {
			required: true,
			type: Object
		}
	},
	computed: {
		value () {
			return this.content.value
		},
		count () {
			return this.content.count
		}
	},
	methods: {
		...mapMutations('cart', [
			'removeItem',
		])
	}
}
</script>

<style lang="stylus">
.ProductItemMini
	position relative
	span
		font-weight bold
</style>
