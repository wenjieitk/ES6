let products = [
    {name : 'cucumbers', type : 'vegetable'},
    {name : 'apple', type : 'fruit'},
    {name : 'mango', type : 'fruit'},
    {name : 'milk', type : 'drinks'}
];

let result = products.filter((product) => {
    return product.type === 'fruit';
});

console.log(result);
