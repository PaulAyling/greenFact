<script>
    export let mixByDegrees
</script>

<div>
	<div class="piechart" />
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
