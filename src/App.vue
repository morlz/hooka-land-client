<template>
	<div id="q-app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	mounted () {
		setTimeout(() => {
			this.$q.dialog({
				title: 'Подтвердите, что вам больше 18 лет',
				message: '',
				cancel: 'Уйти',
				ok: 'Мне есть 18 лет'
			}).onCancel(() => {
				window
					.open("about:blank", "_self")
					.close()
			})
		}, 500)

	}
}
</script>

<style>
</style>
