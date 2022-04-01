<script>
	export let color;
</script>

<div style="--color:{color}" />

<style>
	div {
		background: var(--color);
		width: 20px;
		height: 20px;
		padding: 2px;
	}
</style>
