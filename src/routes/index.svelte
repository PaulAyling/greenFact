<script>
	import "../app.css";

import Table from '../lib/Table.svelte'
 
var carbonData =[]
async function loadJson() {
  const fetched = await fetch('https://api.carbonintensity.org.uk/regional/intensity/source/2022-02-14T18:00:00.000Z/fw24h')
  const res = await fetched.json()
  console.log('res',res.data[0].regions)
  carbonData = res.data[0].regions
  console.log('carbonData:',carbonData)
  return res.data[0].regions
}

const updateCarbonData = async () =>{
	try{
		carbonData = await loadJson()


	} catch (e){
		console.log('error',e)
	}
}
updateCarbonData()
console.log('carbonData:',carbonData)

</script>

	<Table {carbonData}/>
