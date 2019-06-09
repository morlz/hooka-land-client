<template>
	<q-page class="GroupAdmin">
		<q-card class="GroupAdmin__card">
			<q-card-section>
				<div class="text-h4">Группы</div>
			</q-card-section>

			<q-card-section
				class="q-gutter-md"
				style="max-width: 300px"
			>
				<q-tree
					:nodes="tree"
					default-expand-all
					node-key="key"
				>
					<template v-slot:default-header="props">
						<div class="GroupAdmin__treeItem">
							<div>{{ props.node.label }}</div>
							<q-btn
								@click="__remove(props.node)"
								color="negative"
								icon="delete"
								round
								size="sm"
							/>
						</div>
					</template>
				</q-tree>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					@click="createGroup(form)"
					color="primary"
					icon="check"
					label="Добавить"
				/>
			</q-card-actions>
		</q-card>

		<q-card class="GroupAdmin__card">
			<q-card-section>
				<div class="text-h4">Создать группу товаров</div>
			</q-card-section>

			<q-card-section
				class="q-gutter-md"
				style="max-width: 300px"
			>
				<q-input
					filled
					label="Название"
					v-model="form.name"
				/>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					@click="createGroup(form)"
					color="primary"
					icon="check"
					label="Добавить"
				/>
			</q-card-actions>
		</q-card>

		<q-card class="GroupAdmin__card">
			<q-card-section>
				<div class="text-h4">Создать категорию товаров</div>
			</q-card-section>

			<q-card-section
				class="q-gutter-md"
				style="max-width: 300px"
			>
				<q-select
					:options="groupOptions"
					label="Группа"
					v-model="catForm.group"
				/>

				<q-input
					filled
					label="Название"
					v-model="catForm.name"
				/>
			</q-card-section>

			<q-separator/>

			<q-card-actions>
				<q-btn
					@click="__createCategory(catForm)"
					color="primary"
					icon="check"
					label="Добавить"
				/>
			</q-card-actions>
		</q-card>
	</q-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

const CAT = 'category'
const GR = 'group'

const mapCategory = (category) => ({
	id: category.id,
	key: 'category-' + category.id,
	type: CAT,
	label: category.name
})

const mapGroups = (group) => ({
	id: group.id,
	key: 'group-' + group.id,
	label: group.name,
	type: GR,
	children: group.categories.map(mapCategory)
})

export default {
	components: {

	},
	data () {
		return {
			form: {
				name: ''
			},
			catForm: {
				name: '',
				group: null
			}
		}
	},
	computed: {
		...mapGetters('groups', [
			'groupOptions',
		]),
		...mapState('groups', [
			'groups'
		]),
		tree () {
			return this.groups.map(mapGroups)
		}
	},
	methods: {
		...mapActions('groups', {
			createGroup: 'create',
			removeGroup: 'remove'
		}),

		...mapActions('categories', [
			'createCategory',
			'removeCategory',
		]),

		__remove (node) {
			switch (node.type) {
				case GR:
					this.removeGroup(node.id)
					break

				case CAT:
					this.removeCategory(node.id)
					break
			}

		},

		__createCategory (form) {
			this.createCategory({
				name: form.name,
				group_id: form.group.value
			})
		}
	}
}
</script>

<style lang="stylus">
.GroupAdmin
	&__card
		max-width 500px
		margin 50px auto

	&__treeItem
		display grid
		grid-auto-flow column
		justify-content space-between
		width 100%
		align-items center
</style>

