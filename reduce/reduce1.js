/**
 * array.reduce (initial_variable, iterator_variable) {(
     ), initial_value}
 */

let numbers = [10.20,30];
let sum = 0;

for(let i = 0; i < numbers.length;i++){
    sum+= numbers[i];
}

console.log(sum);

let reduceSum = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(reduceSum);