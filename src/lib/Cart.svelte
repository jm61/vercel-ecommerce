<script>
	export let cart = []
	export let product = {}
</script>

<div class="m-auto text-center mt-6 bg-pink-200">
	{#each cart as product, i (product.title)}
		<h3 class="text-lg font-bold">
			{product.title} <span /><mark>{product.quantity}</mark> <br />
		</h3>
	{/each}
</div>
