let products = [
    {name : 'cucumbers', type : 'vegetable', quantity : 1, price : 15},
    {name : 'apple', type : 'fruit',quantity : 1, price : 5},
    {name : 'mango', type : 'fruit',quantity : 5, price : 20},
    {name : 'carrot', type : 'vegetable', quantity : 2, price : 12},
    {name : 'tomato', type : 'vegetable', quantity : 0, price : 2},
    {name : 'milk', type : 'drinks',quantity : 3, price : 1}
];

let result = products.filter((product) => {
    return product.type === 'fruit';
});

console.log(result);

/**************************************************************************************************/

let result2 = products.filter((product) => {
    return product.type === 'vegetable' && product.quantity > 0 && product.price > 10;
});

console.log('\n\n\n\n');
console.log(result2);