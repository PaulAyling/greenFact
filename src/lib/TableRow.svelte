<script>
	export let carbonData;
    export let viewDetails
    const toggle = () =>{
        viewDetails =! viewDetails
        console.log('viewDetails',viewDetails)
    }
</script>

<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
	{#each carbonData as carbon}
		<tr on:click={toggle}   class="hover:bg-gray-100 dark:hover:bg-gray-700">
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{carbon.shortname}
			</th>
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{carbon.dnoregion}
			</th>
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{carbon.intensity.index}
			</th>
		</tr>
	{/each}
</tbody>
