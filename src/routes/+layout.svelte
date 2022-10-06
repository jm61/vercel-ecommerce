<script>
	import '../app.postcss'
	import ShoppingCart from '$lib/ShoppingCart.svelte'
	import Modal from '$lib/Modal.svelte'
	import { CartItemsStore } from '$lib/store'
	import { page } from '$app/stores'

	let showCart = false
	let showModal = true
	if ($page.status === 404) showModal = false
	let cartCount = 0

	$: cartItems = $CartItemsStore
	$: {
		cartCount = 0
		cartItems.forEach((item) => {
			cartCount += item.quantity
		})
	}

	function addItemToCart(event) {
		cartItems = [...cartItems, event.detail.item]
	}
</script>

<div>
	{#if showModal}
		<Modal
			on:click={() => {
				showModal = false
			}}
		>
			<span slot="header">
				<em class="text-xl text-white">{new Date().toLocaleDateString('fr')}</em>
			</span>
			<span slot="body">
				<p class="text-center mb-6">The whole store is 20% off!</p>
			</span>
			<span slot="button" let:hover={hovering}>
				<button
					on:click={() => {
						showModal = false
					}}
					class="bg-pink-500 text-white uppercase font-medium p-2 rounded-md"
					>{hovering ? 'Close' : 'Awesome!'}</button
				>
			</span>
		</Modal>
	{/if}
	<div>
		<nav class="flex items-center border-b border-zinc-700 p-4 lg:px-6">
			<div class="flex w-full items-center justify-between">
				<div class="mr-4">
					<a href="/" class="">
						<picture>
							<source srcset="/logo.png" type="image/png" />
							<img src="/logo.png" alt="Svelte Logo" class="h-8" />
						</picture>
					</a>
				</div>
				<h4 class="px-2 rounded-md font-bold hover:shadow-xl hover:shadow-blue-500">
					<a href="https://vercel.com/docs/beginner-sveltekit">Svelte Tutorial Vercel</a>
				</h4>
				<button
					on:click={() => {
						showCart = true
					}}
					class="uppercase text-white flex items-center"
				>
					<div class="text-pink-500">Cart</div>
					<div
						class="w-5 h-5 ml-2 text-black bg-white rounded-full flex items-center justify-center text-xs font-bold"
					>
						{cartCount}
					</div>
				</button>
			</div>
		</nav>
	</div>
	<div class="relative">
		{#if showCart}
			<ShoppingCart
				bind:cartItems
				on:click={() => {
					showCart = false
				}}
				on:addItemToCart={addItemToCart}
			/>
		{/if}
		<slot />
	</div>
</div>
