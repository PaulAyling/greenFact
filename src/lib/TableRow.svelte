<script>
	export let carbonData;
    export let viewTable
	export let chartData
    const toggle = (areaData) =>{
        viewTable = ! viewTable
        console.log('viewTable',viewTable,chartData)
		chartData = areaData
    }
</script>

<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 cursor-pointer ">
	{#each carbonData as areaData}
		<tr on:click={() => toggle(areaData)}   class="hover:bg-gray-100 dark:hover:bg-gray-700">
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{areaData.shortname}
			</th>
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{areaData.dnoregion}
			</th>
			<th
				scope="col"
				class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
			>
				{areaData.intensity.index}
			</th>
		</tr>
	{/each}
</tbody>
