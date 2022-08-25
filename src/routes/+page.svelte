<script>
	import GridTile from '$lib/GridTile.svelte'
	import CollectionCard from '$lib/CollectionCard.svelte'
	import { browser } from '$app/env'

	if (browser) {
		console.clear()
	}

	let products = [
		{
			title: 'Cup',
			cost: '$10',
			quantity: 1,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405'
		},
		{
			title: 'Shirt',
			cost: '$10',
			quantity: 1,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418'
		},
		{
			title: 'Bathroom Set',
			cost: '$28.00',
			quantity: 1,
			src: 'p1.jpeg'
		},
		{
			title: 'Sticker',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
			cost: '$8.00',
			quantity: 1
		}
	]
	/* let newItems = [
		{
			title: 'Graphic Ts',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
			cost: '$60.00'
		},
		{
			title: 'Jacket Bomber',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
			cost: '$80.00'
		},
		{
			title: 'Top',
			src: 'top.jpeg',
			cost: '$38.00'
		}
	] */

	//setContext('newItemsContext', newItems)
</script>

<svelte:head><title>Vercel E-Commerce</title></svelte:head>

<CollectionCard />
<main>
	{#each products as product, i (product.title)}
		<GridTile {product} />
	{/each}
</main>
