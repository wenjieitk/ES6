let numbers = [10,20,30];

let result = reject (numbers, (number) => {
    return number > 15; // 2
});

function reject(array, iteratorFunction) {
    return array.filter((number)=>{ // 1
        return iteratorFunction(number)===false; // 3
    });
}

console.log(result);