<template>
	<q-drawer
		:width="200"
		:breakpoint="500"
		show-if-above
		bordered
		content-class="bg-grey-3">
		<q-scroll-area class="fit">
			<q-list>

				<template v-for="{ label, items } in menu">
					<q-item-label header>{{ label }}</q-item-label>

					<q-item 
						v-for="item, index in items"
						:key="index"
						clickable 
						v-ripple
						:to="item.path">
						<q-item-section>
							{{ item.label }}
						</q-item-section>
					</q-item>

					<q-separator spaced />
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
