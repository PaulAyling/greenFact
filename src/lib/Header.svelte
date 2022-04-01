<script>
    export let viewTable
    import Btn from './Btn.svelte'
</script>

<header class="flex flex-row justify-between items-center">
    <div><h1 class=" p-2 text-2xl text-center mt-3 uppercase">Carbon Intensity Data</h1></div>
    <Btn bind:viewTable={viewTable}/>
</header>