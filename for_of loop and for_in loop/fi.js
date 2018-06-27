/**
 * Enumerable Properties
 * NO wtih  Arrays 
 * YES with OBJECTS
 */

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

for (let key in obj) {
    console.log(obj[key]); //value
    console.log(key); // key
}

// Result: 1, 2, 3, 4



const string = 'Ire Aderinokun';

for (let index in string) {
    console.log(string[index])
}

// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n