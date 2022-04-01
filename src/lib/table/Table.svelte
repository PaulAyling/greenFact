<script>
	export let carbonData;
	export let viewTable;
	import TableRow from './TableRow.svelte';
	import Header from '../Header.svelte';
	import Card from '../card/card.svelte';
	import TableHead from './tableHead.svelte';

	let chartData = [];
</script>

<div>
	{#if viewTable}
		<div class="flex flex-col">
			<div class="overflow-x-auto  sm:rounded-lg">
				<div class="inline-block min-w-full align-middle">
					<div class="overflow-hidden ">
						<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
							<TableHead />
							<TableRow {carbonData} bind:viewTable bind:chartData />
						</table>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<Card {chartData} />
	{/if}
</div>
