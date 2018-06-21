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