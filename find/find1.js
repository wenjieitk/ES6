// find helper will stop once it match the condition

let users = [
    {name : "Jill"},
    {name : 'alex'},
    {name : 'bill'},
    {name : 'alex'}
];

let result = users.find((user) => {
    return user.name === 'alex';
});

console.log(result);


/*****************************************************************************************/

/******************************** */

function Car(model) {
    this.model = model;
}

var cars = [
    new Car ('Buick'),
    new Car('Camaro'),
    new Car('Focus'),
    new Car('Buick')
];

let result2 = cars.find((car) => {
    return car.model === 'Buick';
});


console.log(result2);