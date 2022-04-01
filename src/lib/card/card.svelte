<script>
	export let chartData;
	import CardHeader from './CardHeader.svelte'
    import Pie from './Pie.svelte'
	const generationMix = chartData.generationmix;
	console.log('chartData:card:Pie Data', generationMix);


	const convertToDegrees = (arr) => {
        let res = []
		for (let i = 0; i < arr.length; i++) {
			res.push({'fuel':arr[i].fuel,'deg':parseInt(arr[i].perc)/100*360})
		}
        return res
	};
    console.log('convertToDegrees',convertToDegrees(generationMix))
    const mixByDegrees = convertToDegrees(generationMix)
    const name = 'bob'

</script>
<main >
	<CardHeader {chartData}/>
	<Pie {mixByDegrees} />
</main>


