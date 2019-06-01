export const length = state => state.items.length

export const itemCounts = state => 
	state.items.reduce((acc, item) => {
		if (acc[item] === undefined)
			acc[item] = 0

		acc[item]++

		return acc
	}, {})

export const items = (state, getters) => 
	Object
		.entries(getters.itemCounts)
		.reduce((acc, [itemID, count]) => {
			acc[itemID] = {
				count,
				value: state.cached.items
					.find(item => item.id == itemID)
			}

			return acc
		}, {})

export const sum = (state, getters) => 
	Object
		.values(getters.items)
		.filter(({ value }) => value)
		.reduce((acc, { value, count }) => acc + value.price * count, 0)