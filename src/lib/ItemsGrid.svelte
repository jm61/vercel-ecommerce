<script>
	//import { getContext } from 'svelte'
	import { newItems } from '$lib/store'
	//let items = getContext('newItemsContext')
</script>

<div class="flex items-center">
	{#each $newItems as item}
		<div
			class="relative m-2 w-1/2 bg-white/20 h-40 flex items-center justify-center overflow-hidden"
		>
			<img src={item.src} class="h-full" alt="" />
			<div class="absolute bottom-0 right-0 bg-black p-2 text-white">
				{item.title}
			</div>
		</div>
	{/each}
</div>
