<template>
	<section 
		class="IndexSection">
		<h3 
			v-if="title"
			class="IndexSection__title">{{ title }}</h3>

		<div 
			class="IndexSection__inner"
			:style="styles">
			<q-img 
				v-if="!right && img"
				class="IndexSection__img shadow-6"
				:src="img" />

			<div class="IndexSection__cotnent">
				<slot/>
			</div>

			<q-img 
				v-if="right && img"
				class="IndexSection__img shadow-6"
				:src="img" />
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

