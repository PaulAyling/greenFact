<script>
    export let viewTable
    import Fa from 'svelte-fa'
    import { faTableCells } from '@fortawesome/free-solid-svg-icons'  

     const toggle = () =>{
        viewTable = ! viewTable
        console.log('viewTable',viewTable)
    }
</script>
<button on:click={() => toggle()} class="p-10 text-2xl text-blue-200 hover:text-red-400  active:text-red-300 ">
	<Fa icon={faTableCells}  
	class=" text-center  text-4xl text-blue-200 hover:text-red-400  active:text-red-300"/>
</button>