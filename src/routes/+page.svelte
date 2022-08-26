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
			quantity: 0,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405'
		},
		{
			title: 'Shirt',
			cost: '$10',
			quantity: 0,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418'
		},
		{
			title: 'Bathroom Set',
			cost: '$28.00',
			quantity: 0,
			src: 'p1.jpeg'
		},
		{
			title: 'Sticker',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
			cost: '$8.00',
			quantity: 0
		}
	]
</script>

<svelte:head><title>Vercel E-Commerce</title></svelte:head>

<CollectionCard />
<main>
	{#each products as product, i (product.title)}
		<GridTile {product} />
	{/each}
</main>
