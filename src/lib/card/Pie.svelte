<script>
	export let cssParams;
	console.log('Pie PROP:', cssParams);

	const f0_biomass = cssParams[0];
	console.log('f0_biomass:', f0_biomass);

	const f1_coal = cssParams[1];
	console.log('f1_coal:', f1_coal);

	const f2_imports = cssParams[2];
	console.log('f2_imports:', cssParams[2]);

	const f3_gas = cssParams[3];
	console.log('f3_gas:', cssParams[3]);

	const f4_nuclear = cssParams[4];
	console.log('f4_nuclear :', cssParams[4]);

	const f5_other = cssParams[5];
	console.log('f5_other:', cssParams[5]);

	const f6_hydro = cssParams[6];
	console.log('f6_hydro:', cssParams[6]);

	const f7_solar = cssParams[7];
	console.log('f7_solar:', cssParams[7]);

	const f8_wimd = cssParams[8];
	console.log('f8_wimd:', cssParams[8]);

	const blueColor = 'blue';
	const whiteColor = 'white';
</script>

<div>
	<div
		class="piechart"
		style="--f0_biomass:{f0_biomass} --f1_coal:{f1_coal} --f2_imports:{f2_imports} --f3_gas:{f3_gas} --f4_nuclear:{f4_nuclear} --f5_other:{f5_other} --f6_hydro:{f6_hydro}  --f7_solar:{f7_solar}  --f8_wimd:{f8_wimd} "
	/>
</div>
<div class="test" style="--blueColor:{blueColor}    ">
	PAULS TEST ELEMETNT
</div>

<style>
	.test {
		background: var(--blueColor);
		color:var(--whiteColor);
	}
	.piechart {
		margin: 20px;
		display: block;
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-image: conic-gradient(
			/* pink 0,
			lightblue 0 0,
			red 0 0,
			green 0 0,
			purple 0 8deg,
			blue 8deg 8deg, 
			orange 8deg 171deg,
			cyan 171deg 171deg, 
			gray 171deg 359deg  */
				pink 0,
			lightblue var(--f0_biomass),
			red var(--f1_coal),
			orange var(--f2_imports),
			green var(--f0_biomass),
			blue var(--f4_nuclear),
			lightblue var(--f5_other),
			red var(--f6_hydro),
			orange var(--f7_solar) /* blue var(--f8_wimd) */
		);
	}

	body,
	.piechart {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
