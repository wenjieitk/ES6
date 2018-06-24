let colors = [
    {color : 'red'},
    {color : 'yellow'},
    {color : 'blue'}
];

let result = colors.reduce((accumulator,color) => {
    accumulator.push(color.color);
    return accumulator;
},[]);

console.log(result);