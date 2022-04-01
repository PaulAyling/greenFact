<script>
	export let cssParams;
	console.log('Pie PROP:', cssParams);

	const f0_biomass = cssParams[0];
	// console.log('0:|', f0_biomass);

	const f1_coal = cssParams[1];
	// console.log('1:', f1_coal);

	const f2_imports = cssParams[2];
	// console.log('2:',mixByDegrees[2].deg)

	const f3_gas = cssParams[3];
	// console.log('3:',mixByDegrees[3].deg)

	const f4_nuclear = cssParams[4];
	// console.log('4:',mixByDegrees[4].deg)

	const f5_other = cssParams[5];
	// console.log('5:',mixByDegrees[5].deg)

	const f6_hydro = cssParams[6];
	// console.log('6:',mixByDegrees[6].deg)

	const f7_solar = cssParams[7];
	// console.log('7:',mixByDegrees[7].deg)

	const f8_wimd = cssParams[8];
	// console.log('8:',mixByDegrees[8].deg)
</script>

<div>
	<div
		class="piechart"
		style="--f0_biomass:{f0_biomass} --f1_coal:{f1_coal} --f2_imports:{f2_imports} --f3_gas:{f3_gas} --f4_nuclear:{f4_nuclear} --f5_other:{f5_other} --f6_hydro:{f6_hydro}  --f7_solar:{f7_solar}  --f8_wimd:{f8_wimd} "
	/>
</div>

<style>
	.piechart {
		margin: 20px;
		display: block;
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-image: conic-gradient(
			pink 0,
			lightblue 0 25deg,
			red 25deg 100deg,
			green 100deg 100deg,
			orange 100deg 125deg,
			/* blue 125deg 200deg   */
			/* pink 0,
            lightblue var(--f0_biomass), 	
            red var(--f1_coal),
            orange var(--f2_imports),
            green var(--f0_biomass),
			blue var(--f4_nuclear),
            lightblue var(--f5_other), 	
            red var(--f6_hydro),
            orange var(--f7_solar),
			blue var(--f8_wimd) */
		);
	}

	body,
	.piechart {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
