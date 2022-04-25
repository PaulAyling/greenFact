<script>
	export let generationMix;
	import LegendRow from './legendRow.svelte';
	const legend = generationMix
	console.log('legend:',legend)
	
</script>

<div>
	<div class="flex flex-col mt-10">
		<div class="overflow-x-auto  sm:rounded-lg">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden ">
					<table class="min-w-full">
						<thead class="bg-gray-100 dark:bg-blue-400 ">
							<tr>
								<th
									scope="col"
									class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"
								>
									Type
								</th>
								<th
									scope="col"
									class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"
								>
									%
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-blue-200 cursor-pointer ">
							{#each legend as row}
								<LegendRow fuel={row.fuel} perc={row.perc} color={row.legendCol} />
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
