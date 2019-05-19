<template>
	<q-card>
		<q-img
			v-if="content.img"
			:src="content.img"
			basic/>

		<q-card-section>
			<div class="text-h6">{{ content.name }}</div>
			<div class="text-subtitle2">{{ content.description }}</div>
		</q-card-section>
	</q-card>
</template>

<style>
</style>

<script>
export default {
	props: {
		content: {
			type: Object,
			required: true
		}
	}
}
</script>
