<template>
	<q-page class="Items">
		<div class="Items__content">
			<item
				:content="item"
				:key="item.id"
				v-for="item in items"
			/>
		</div>

		<div class="flex flex-center">
			<q-pagination
				:boundary-numbers="false"
				:max="pages"
				:max-pages="6"
				:value="+$route.params.page || 1"
				@input="__openPage"
				class="Items__pages"
			/>
		</div>
	</q-page>
</template>

<style>
</style>

<script>
import Item from 'components/Item'

export default {
	components: {
		Item
	},
	data () {
		return {
			items: [],
			pages: 1,
			loading: false
		}
	},
	watch: {
		'$route' (n) {
			this.__fetchData(n.params)
		}
	},
	methods: {
		async __fetchData (params) {
			this.loading = true
			try {
				const {
					data,
					headers
				} = await this.$axios.get('/products', {
					params
				})
				this.items = data
				this.pages = +headers['pagination-count']
				this.__openPage(+headers['pagination-page'])
			} catch (err) {
				console.error(err)
			}
			this.loading = false
		},

		__openPage (page) {
			if (this.$route.params.page == page) return

			this.$router.push({
				name: this.$route.name,
				params: {
					...this.$route.params,
					page
				}
			})

		}
	},
	created () {
		this.__fetchData(this.$route.params)
	}
}
</script>

<style lang="stylus">
.Items
    padding 10px
    &__content
        display grid
        grid-gap 10px
        grid-template-columns repeat(auto-fit, minmax(300px, 600px))
    &__pages
        margin 20px auto
</style>
