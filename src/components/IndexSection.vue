<template>
	<section class="IndexSection">
		<h3
			class="IndexSection__title"
			v-if="title"
		>{{ title }}</h3>

		<div
			:style="styles"
			class="IndexSection__inner"
		>
			<q-img
				:src="img"
				class="IndexSection__img shadow-6"
				v-if="!right && img"
			/>

			<div class="IndexSection__cotnent">
				<slot/>
			</div>

			<q-img
				:src="img"
				class="IndexSection__img shadow-6"
				v-if="right && img"
			/>
		</div>
	</section>
</template>

<style>
</style>

<script>

export default {
	props: {
		title: String,
		img: String,
		right: Boolean
	},

	computed: {
		styles () {
			if (!this.img)
				return { gridTemplateColumns: `1fr` }


			return { gridTemplateColumns: `1fr 1fr` }
		}
	}
}
</script>

<style lang="stylus">
.IndexSection
	padding 20px
	
	&__title
		margin-left auto
		margin-right auto
		max-width 900px

	&__inner
		margin 0 auto
		max-width 900px
		display grid
		grid-gap 30px
		grid-auto-flow column

</style>

