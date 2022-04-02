<script>
import { start_hydrating } from "svelte/internal";


	export let carbonData;
    export let viewTable
	export let chartData
    const toggle = (areaData) =>{
        viewTable = ! viewTable
        // console.log('viewTable',viewTable,chartData)
		chartData = areaData
    }

	const colBand = (str) =>{
		console.log('colBand running.....ARG:',str)
		if(str == 'low'){
			console.log('intesity fiunc:',str,'rounded green')
			return 'rounded bg-green-500'
		}else if(str == 'very low'){
			return 'rounded bg-green-200'
		}else if(str == 'moderate'){
			return 'rounded bg-yellow-400'
		} else{
			return 'rounded bg-red-400'
		}
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
				<div class="text-gray-800 text-center p-2 {colBand(areaData.intensity.index)}">
					{areaData.intensity.index}
				</div>
			</th>
		</tr>
	{/each}
</tbody>
