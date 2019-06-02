<template>
	<q-page class="CategoryCreate"></q-page>
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
		__createOrder () {

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

