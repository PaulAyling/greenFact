<script>
	import { intros } from 'svelte/internal';
	export let chartData;
	import CardHeader from './CardHeader.svelte';
	import Pie from './Pie.svelte';
	import Legend from './legend/Legend.svelte';
	import { ammendColors } from './ammendColors';
	const generationMix = ammendColors(chartData.generationmix);
	console.log('chartData',chartData)
	console.log('generationMix',generationMix)

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

		const makeCumulative = (arr) => {
			let res = [];
			for (let i = 0; i < arr.length; i++) {
				let cumulativeDeg;
				if (i == 0) {
					cumulativeDeg = arr[i];
				} else {
					cumulativeDeg = arr[i] + parseFloat(res[i - 1]);
				}
				res.push(cumulativeDeg);
			}
			return res;
		};
		const cum = makeCumulative(degArr);
		const makeParams = (arr) => {
			const applyUnit = (n) => {
				if (n == '0') {
					return '0';
				} else {
					return n + 'deg';
				}
			};

			let res = [];
			for (let i = 0; i < arr.length; i++) {
				const rnd = parseInt(arr[i]);
				const str = String(rnd);
				const current = applyUnit(str);
				let param;
				if (i == 0) {
					param = '0 ' + current;
					res.push(param);
				} else {
					const recordBefore = applyUnit(String(parseInt(arr[i - 1])));
					param = recordBefore + ' ' + current;

					res.push(param);
				}
			}
			return res;
		};
		const final = makeParams(cum);
		return final;
	};
	const cssParams = createCssParams(generationMix);
	console.log('cssParams',cssParams)
	console.log('chartData',chartData)
</script>

<main class="mb-20">
	<CardHeader {chartData} />
	<div class="flex flex-row justify-between	">
		<Pie {cssParams} {chartData} />
		<Legend {generationMix} />
	</div>
</main>
