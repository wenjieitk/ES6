const companies = [
    'Google',
    'Facebook',
    'Uber',
    'aaa',
    'bbb',
    'ccc'
];

const [name1, name2, name3, ...rest] = companies;
const {length} = companies;

console.log(
    name1, // Google
    name2, // Facebook
    name3, // Uber 
    rest, // [ 'aaa', 'bbb', 'ccc' ]
    length // 3
); 

const test = [
    'one'
];

const [num1, num2] = test;

console.log(
    num1, // one
    num2 // undefined
);