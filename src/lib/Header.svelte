<script>
    export let viewTable
    export let chartData
    import Btn from './Btn.svelte'
</script>

<header class="flex flex-row justify-end items-center">
    <div class="text-4xl text-blue-400 text-right self-center mr-10 font-bold divide-solid flex-grow: 2">
        {viewTable ? "Carbon Intensity Data" : chartData.dnoregion}
         <hr class="mt-4">
        </div>


    <!-- <div><h1 class=" p-2 text-2xl text-center mt-3 uppercase">{viewTable ? 'Carbon Intensity Data':'Detailed Renewable Mix'}</h1></div> -->
    <Btn bind:viewTable={viewTable}/>
</header>