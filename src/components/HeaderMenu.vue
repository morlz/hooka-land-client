<template>
	<q-tabs :value="$route.fullPath">
		<q-route-tab 
			v-for="{ label, path, items }, index in menu"
			:key="index"
			:is="items ? 'q-btn-dropdown' : 'q-route-tab'"
			:label="label"
			:to="path"
			flat
			stretch
			:split="!!path"
			:name="path"
			auto-close>
			<q-list link>
				<q-item 
					v-for="item, index in items"
					:key="index"
					clickable
					:to="item.path">

					<q-item-section>{{ item.label }}</q-item-section>

				</q-item>
			</q-list>
		</q-route-tab>
	</q-tabs>
</template>

<style>
</style>

<script>
const mapCategoryFn = cat => ({
	path: `/category/${cat.id}`,
	label: cat.name
})

const mapGroupFn = group => ({
	path: `/group/${group.id}`,
	label: group.name,
	items: group.categories
		.map(mapCategoryFn)
})


export default {
	data () {
		return {
			loading: false,
			groups: [],
		}
	},

	computed: {
		menu () {
			return [{
					path: '/',
					label: 'Главная'
				}]
				.concat(
					this.groups
						.map(mapGroupFn)
				)
			
		}
	},

	methods: {
		async __fetchMenu () {
			this.loading = true
			try {
				const { data } = await this.$axios.get('/groups')
				this.groups = data
			} catch (err) {
				console.error(err)
			}
			this.loading = false
		}
	},

	created () {
		this.__fetchMenu()
	}
}
</script>
