
const mapItem = group => ({
	value: group.id,
	label: group.name
})

export const groupOptions = state => state.groups
	.map(mapItem)

export const categoryOptions = state => state.groups
	.reduce((acc, group) => {
		acc[group.id] = group.categories.map(mapItem)

		return acc
	}, {})
