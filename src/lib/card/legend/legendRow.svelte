<script>
	export let fuel;
	export let perc;
	export let color;
	import Block from './Block.svelte'
</script>

<tr>
	<th
		scope="col"
		class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
		><div class="flex flex-row"><Block {color}/><div class="pl-2">{fuel}</div></div>
	</th>
	<th
		scope="col"
		class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
		>{perc}
	</th>
</tr>
