<script>
	import { browser } from '$app/env'
	import Cart from '$lib/Cart.svelte'
	let cart = []
	let product = { james: 'james' }

	if (browser) {
		console.clear()
	}

	$: products = [
		{
			id: 'b3aa6efea0646',
			title: 'Cup',
			cost: '$10',
			quantity: 0,
			selected: false,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405'
		},
		{
			id: '476413a9fea018',
			title: 'Shirt',
			cost: '$10',
			quantity: 0,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418'
		},
		{
			id: '139377dc64a14',
			title: 'Bathroom Set',
			cost: '$28.00',
			quantity: 0,
			src: 'p1.jpeg'
		},
		{
			id: 'e3cec56aa8c1b',
			title: 'Sticker',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
			cost: '$8.00',
			quantity: 0
		}
	]

	function add2Cart(product) {
		const temp = [...cart, product]
		cart = Array.from(new Set(temp))
		product.quantity += 1
		//console.log(cart)
	}
</script>

<div class="m-auto text-center mt-6">
	{#each products as product, i (product.id)}
		<h3 class="text-lg font-bold">
			{product.title} <span /><mark>{product.quantity}</mark> <br />
		</h3>
		<button on:click={() => add2Cart(product)} class="bg-gray-200">Add to Cart</button>
	{/each}
</div>

<Cart {product} {cart} />
