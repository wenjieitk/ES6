let numbers = [1,2,3,4,5];

let result = numbers.map(num => {
    return num * 2;
});

console.log(result);

let cars = [
    { model: 'buick', price : 'cheap' },
    { model: 'camaro', price : 'expensive' },
];

let prices = cars.map((car) => {
    return car.price;
});

console.log(prices);