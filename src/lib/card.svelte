<script>
    export let chartData
    import Pie from './Pie.svelte'

    console.log('chartData:card:',chartData)
    const generationMix = chartData.generationmix
</script>
<article>
    <ul>
        {#each generationMix as mixItem}
        <li>    {mixItem.fuel} :Percentage {mixItem.perc}</li>
        {/each}
    </ul>
    <Pie/>
</article>