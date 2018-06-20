let numbers = [1,2,3,4,5];

let result = numbers.map(num => {
    return num * 2;
});

console.log(result);


/*******************************************************************************************************************/

let cars = [
    { model: 'buick', price : 'cheap' },
    { model: 'camaro', price : 'expensive' },
];

let prices = cars.map((car) => {
    return car.price;
});

console.log(prices);


/*******************************************************************************************************************/


let paints = [{color:'red'},{color:'blue'},{color:'green'}];

function pluck (arrays, property) {
    return arrays.map((array) => {
        return array[property];
    });
}

console.log(pluck(paints,'color'));