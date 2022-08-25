<script>
	export let product = {
		title: 'No product provided',
		src: 'https://img.icons8.com/ios/500/no-image.png',
		cost: '$0',
		quantity: 1
	}
	import { CartItemsStore } from '$lib/store'

	function addToCart() {
		CartItemsStore.update((currentData) => {
			return [product, ...currentData]
		})
	}
</script>

<div class="h-[30vh] w-1/2 bg-indigo-600 overflow-hidden mb-6 rounded-lg shadow ml-6">
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
			<button on:click={addToCart} class="bg-black w-full p-2 rounded-md"> Add To Cart </button>
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
