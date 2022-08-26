import { writable } from 'svelte/store'

export const CartItemsStore = writable([])
export const newItems = writable([
	{
		title: 'Graphic Ts',
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
		cost: '$60.00',
		quantity: 0
	},
	{
		title: 'Jacket Bomber',
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
		cost: '$80.00',
		quantity: 0
	},
	{
		title: 'Top',
		src: 'top.jpeg',
		cost: '$38.00',
		quantity: 0
	}
])
