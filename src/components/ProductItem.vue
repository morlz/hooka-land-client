<template>
	<q-card class="Item">
		<q-img
			:src="content.img"
			basic
			v-if="content.img"
		/>

		<q-card-section class="Item__main">
			<div class="text-h6">{{ content.name }}</div>
			<div>{{ content.description }}</div>
			<div class="Item__price">
				<span class="Item__priceAmount">{{ content.price }}</span>
				руб/{{ content.unit }}
			</div>
		</q-card-section>

		<q-separator/>

		<q-card-actions>
			<q-btn
				@click="addItem(content.id)"
				color="primary"
				flat
				icon="shopping_cart"
				label="Добавить в корзину"
			/>

			<q-btn
				@click="__delete(content.id)"
				color="negative"
				flat
				icon="delete"
				label="Удалить товар"
				v-if="logined"
			/>
		</q-card-actions>
	</q-card>
</template>



<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
	props: {
		content: {
			type: Object,
			required: true
		}
	},

	computed: {
		...mapGetters('auth', [
			'logined'
		]),
	},

	methods: {
		...mapActions('cart', [
			'addItem'
		]),
		...mapActions('products', [
			'deleteProduct'
		]),
		async __delete (id) {
			const res = await this.deleteProduct(id)

			if (res)
				this.$emit('delete', id)
		}
	}
}
</script>


<style lang="stylus">
.Item
	max-width 500px

	display grid
	grid-template-rows 1fr auto

	&__main
		display grid
		grid-template-rows auto 1fr auto

	&__price
		font-size 16px
		text-align right
	
	&__priceAmount
		font-size 24px
</style>