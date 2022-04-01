<script>
	export let chartData;
	import CardHeader from './CardHeader.svelte';
	import Pie from './Pie.svelte';
	const generationMix = chartData.generationmix;
	console.log('PIE:PROP', generationMix);

	const createCssParams = (arr) => {
		const convertToDeg = (arr) => {
			let res = [];
			for (let i = 0; i < arr.length; i++) {
				let deg = (parseFloat(arr[i].perc) / 100) * 360;
				res.push(deg);
			}
			return res;
		};
		const degArr = convertToDeg(arr);
		console.log('convert', degArr);

		const makeCumulative = (arr) => {
			let res = [];
			for (let i = 0; i < arr.length; i++) {
			let cumulativeDeg
			if(i == 0){
				cumulativeDeg = arr[i]
			} else{
				cumulativeDeg =  arr[i] + parseFloat(res[i-1])
			}
			res.push(cumulativeDeg)
			}
			return res;
		};
		const cum = makeCumulative(degArr)
		console.log('makeCumulative',cum)
		const makeParams = (arr) =>{
			let res = [];
			for (let i = 0; i < arr.length; i++) {
				
			}

		}


		// const res = convertToParams(degArr);
		// return res;
	};
	createCssParams(generationMix);
	// console.log('convertToDegrees',convertToDegrees(generationMix))
	// const mixByDegrees = convertToDegrees(generationMix)
	// const name = 'bob'
</script>

<!-- <main >
	<ardHeader {chartData}/>
	<Pie {mixByDegrees} />
</main> -->
