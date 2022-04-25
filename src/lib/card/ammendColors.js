export const ammendColors = (obj) =>{
    const chartCol = (type) => {
        const typeColors = [
            'orange',
            'gray',
            'lightgray',
            'blue',
            'yellow',
            'pink',
            'purple',
            'red',
            'cyan'
        ];
        const typesArr = [
            'biomass',
            'coal',
            'imports',
            'gas',
            'nuclear',
            'other',
            'hydro',
            'solar',
            'wind'
        ];
        const typeIx = typesArr.indexOf(type);
        return typeColors[typeIx];
    };
    const addSingleColor=(obj)=>{
        const color = chartCol(obj.fuel)
        return {
        ...obj,
        legendCol:color
        }
    }
    let result = []
    for (var i = 0; i < obj.length; i++) {
        const newObj = addSingleColor(obj[i])
        result.push(newObj);
    }
    return result 
}