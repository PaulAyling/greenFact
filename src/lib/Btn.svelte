<script>
	export let viewTable;
    // removed as it prevents build
	// import Fa from 'svelte-fa';
	// import { faXmark } from '@fortawesome/free-solid-svg-icons';

	const toggle = () => {
		viewTable = !viewTable;
		console.log('viewTable', viewTable);
	};
</script>

<button
	on:click={() => toggle()}
	class="text-2xl text-blue-200 hover:text-red-400  active:text-red-300 "
>      <p class="align-top text-right">{viewTable ? '': 'X'}</p>
	
</button>
