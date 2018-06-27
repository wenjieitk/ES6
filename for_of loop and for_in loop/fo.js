/**
 * iterable collections
 * NO with OBJECCTS
 * YES with ARRAYS and STRINGS
 * Array.from() -> for...of
 */
const colors = ['red','green','blue'];

const array = ['a', 'b', 'c', 'd'];
for (let item of array) {
    console.log(item)
}
// Result: a, b, c, d

const string = 'Ire Aderinokun';
for (let character of string) {
    console.log(character)
}
// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n