<script>
    export let mixByDegrees

	const f0_biomass = '0 '+mixByDegrees[0].deg
	// console.log('0:|',f0_biomass)

	const f1_coal = mixByDegrees[0].deg+' '+mixByDegrees[1].deg
	console.log('1:',f1_coal)

	const f2_imports = mixByDegrees[2].deg
	// console.log('2:',mixByDegrees[2].deg)

	const f3_gas = mixByDegrees[3].deg
	// console.log('3:',mixByDegrees[3].deg)

	const f4_nuclear = mixByDegrees[4].deg
	// console.log('4:',mixByDegrees[4].deg)

	const f5_other = mixByDegrees[5].deg
	// console.log('5:',mixByDegrees[5].deg)

	const f6_hydro = mixByDegrees[6].deg
	// console.log('6:',mixByDegrees[6].deg)

	const f7_solar = mixByDegrees[7].deg
	// console.log('7:',mixByDegrees[7].deg)

	const f8_wimd = mixByDegrees[8].deg
	// console.log('8:',mixByDegrees[8].deg)

	


</script>

<div>
	<div class="piechart" style="--f0_biomass: {f0_biomass} --f1_coal: {f1_coal} " />
</div>


<style>


	.piechart {
		margin:20px;
		display: block;
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-image: conic-gradient(
            pink 0, 
            lightblue 0 25deg, 	/* f0_biomass */
            red 25deg 100deg,
            green 100deg 110deg,
            orange 110deg 125deg,
			blue 125deg 200deg
            );
	}
	
	body,
	.piechart {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
