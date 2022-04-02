<script>
    export let viewTable
    export let chartData
    import Btn from './Btn.svelte'
</script>

<header class="flex flex-row justify-end items-start">
    <div class="text-4xl text-blue-400 font-bold text-center w-full">
        {viewTable ? "Carbon Intensity Data" : chartData.dnoregion}
         <hr class="mt-4">
        </div>
    <!-- <div><h1 class=" p-2 text-2xl text-center mt-3 uppercase">{viewTable ? 'Carbon Intensity Data':'Detailed Renewable Mix'}</h1></div> -->
    <Btn bind:viewTable={viewTable}/>
</header>