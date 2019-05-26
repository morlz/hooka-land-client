<template>
	<q-layout view="lHh Lpr lFf">
		<q-header
			class="bg-white text-primary"
			elevated
		>
			<header-menu/>
			<header-cart/>
		</q-header>

		<q-page-container>
			<router-view/>
		</q-page-container>
	</q-layout>
</template>

<script>
import { openURL } from 'quasar'
import HeaderMenu from 'components/HeaderMenu'
import HeaderCart from 'components/HeaderCart'

export default {
	name: 'MyLayout',
	components: {
		HeaderMenu,
		HeaderCart
	},
	data () {
		return {
			leftDrawerOpen: this.$q.platform.is.desktop
		}
	},
	methods: {
		openURL
	}
}
</script>

<style>
</style>
