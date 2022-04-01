<script>
    export let chartData
</script>
<header class="flex flex-col">
<!-- <div class="text-4xl text-blue-400 text-center font-bold divide-solid">
    {chartData.dnoregion}
     <hr class="mt-4">
    </div> -->
    <div>
        <h2 class="text-blue-400 text-center font-bold p-3">Current Carbon Intensity</h2>
    </div>
    <div class="text-4xl text-orange-300 text-center font-bold divide-solid">
        {chartData.intensity.forecast}
    </div>
    <div class=" text-gray-300 text-center font-bold divide-solid">
        gCO<sub>2</sub>/kWh
        
        <hr class="mt-10">
</div>


</header>