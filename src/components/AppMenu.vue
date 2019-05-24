<template>
	<q-drawer
		:breakpoint="500"
		:width="200"
		bordered
		content-class="bg-grey-3"
		show-if-above
	>
		<q-scroll-area class="fit">
			<q-list>
				<template v-for="{ label, items } in menu">
					<q-item-label header>{{ label }}</q-item-label>

					<q-item
						:key="index"
						:to="item.path"
						clickable
						v-for="item, index in items"
						v-ripple
					>
						<q-item-section>{{ item.label }}</q-item-section>
					</q-item>

					<q-separator spaced/>
				</template>
			</q-list>
		</q-scroll-area>
	</q-drawer>
</template>

<style>
</style>

<script>
export default {
	data () {
		return {
			menu: [
				{
					label: 'asd',
					items: [
						{
							label: 'aaa',
							path: '/asd'
						},
						{
							label: 'sss',
							path: '/asd'
						},
					]
				},
				{
					label: 'asd',
					items: [
						{
							label: 'aaa',
							path: '/asd'
						},
						{
							label: 'sss',
							path: '/asd'
						},
					]
				},
			]
		}
	}
}
</script>
