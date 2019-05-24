<template>
	<div class="AppHeader">
		<q-tabs :value="menu[currentIndex] ? menu[currentIndex].path : this.$route.fullPath">
			<q-tab
				:key="index"
				:label="label"
				:name="path"
				:to="path"
				@click="$router.push(path)"
				stretch
				v-for="{ label, path, items }, index in menu"
			/>
		</q-tabs>

		<q-tabs
			:value="$route.fullPath"
			v-if="menu[currentIndex] && menu[currentIndex].items"
		>
			<q-route-tab
				:key="index"
				:label="label"
				:name="path"
				:to="path"
				stretch
				v-for="{ label, path }, index in menu[currentIndex].items"
			/>
		</q-tabs>
	</div>
</template>

<style>
</style>

<script>
const mapCategoryFn = cat => ({
	id: cat.id,
	path: `/category/${cat.id}`,
	label: cat.name
})

const mapGroupFn = group => ({
	id: group.id,
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
				id: -1,
				path: '/',
				label: 'Главная'
			}]
				.concat(
					this.groups
						.map(mapGroupFn)
				)

		},

		currentIndex () {
			return this.menu
				.findIndex(el =>
					el.id == this.$route.params.group
					|| Array.isArray(el.items)
					&& ~el.items.findIndex(el2 => el2.id == this.$route.params.category)
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
