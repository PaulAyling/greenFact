<script>
    export let carbonData
    import TableRow from './TableRow.svelte'
</script>
<!-- This is an example component -->

<h1 class="text-2xl text-center">Carbon Intensity</h1>

<div class="max-w-2xl mx-auto mt-10">
<div class="flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                shortname
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                dnoregion
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                intensity
                            </th>
                        </tr>
                    </thead>
                       <TableRow {carbonData}>
                </table>
            </div>
        </div>
    </div>
</div>
</div>

