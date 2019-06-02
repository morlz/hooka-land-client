<template>
	<q-page class="PageAuth">
		<q-card class="PageAuth__card">
			<q-card-section>
				<div class="text-h6">Авторизация</div>
			</q-card-section>

			<q-card-section class="PageAuth__form">
				<q-input
					filled
					label="Login"
					v-model="form.email"
				/>

				<q-input
					filled
					label="Password"
					type="password"
					v-model="form.password"
				/>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					@click="signIn(form)"
					color="primary"
					label="Войти"
				/>
			</q-card-actions>
		</q-card>
	</q-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
	components: {

	},
	data () {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},
	computed: {
		...mapGetters('auth', [
			'logined'
		])
	},
	methods: {
		...mapActions('auth', [
			'signIn'
		])
	},
	created () {

	}
}
</script>

<style lang="stylus">
.PageAuth
	display grid
	align-content center
	justify-content center

	&__card
		width 300px

	&__form
		display grid
		grid-gap 10px
		
</style>

