<script>
	import Modal from '$lib/Modal.svelte'
	export let product = {
		title: 'No product provided',
		src: 'https://img.icons8.com/ios/500/no-image.png',
		cost: '$0',
		quantity: 1
	}
	let showModal = false
	import { CartItemsStore } from '$lib/store'

	function addToCart() {
		const temp = [...$CartItemsStore, product]
		$CartItemsStore = Array.from(new Set(temp))
		product.quantity += 1
		/* CartItemsStore.update((currentData) => {
			console.log($CartItemsStore)
			return [product, ...currentData]
		}) */
	}

	function closeModal() {
		showModal = true
		setTimeout(() => {
			showModal = false
		}, 1000)
	}
</script>

<div class="h-[30vh] w-1/2 bg-indigo-600 overflow-hidden mb-6 rounded-lg shadow ml-6">
	{#if showModal}
		<Modal
			on:click={() => {
				showModal = false
			}}
		>
			<span slot="body">
				<p class="text-center mb-6">
					Item added to Cart <span><small>quantity: {product.quantity}</small></span>
				</p>
			</span>
			<span slot="button" let:hover={hovering} />
		</Modal>
	{/if}
	<div class="relative flex h-full w-full items-center justify-center">
		<img
			src={product.src}
			class="max-h-full flex-none transition duration-300 ease-in-out"
			alt=""
		/>
		<div class="text-white absolute top-0 left-0">
			<div class="bg-black p-3 text-xl  font-medium">{product.title}</div>
			<div class="w-fit bg-black p-3 text-sm">{product.cost}</div>
		</div>
		<div class="w-1/4 bottom-2 p-6 text-white">
			<button on:click={addToCart} on:click={closeModal} class="bg-black w-full p-2 rounded-md">
				Add To Cart
			</button>
		</div>
	</div>
</div>

<style>
	.shadow {
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
	}
	.shadow:hover {
		filter: sepia(50%);
	}
</style>
