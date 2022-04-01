<script>
	export let chartData;
	const generationMix = chartData.generationmix;
	console.log('chartData:card:generationMix', generationMix);
	console.log();

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

<title>Pie Chart</title>

<body>
	<h1>Pie Chart</h1>
	<div class="piechart" />
</body>

<style>

	.piechart {
		margin-top: 300px;
		display: block;
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-image: conic-gradient(
            pink 0deg, 
            lightblue 0 235deg, 
            red 235deg 245deg,
            orange 0
            );
	}

	body,
	.piechart {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
