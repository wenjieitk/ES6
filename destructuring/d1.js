let expense = {
    type : "Business",
    amount : 45
}

//es5
let type5 = expense.type;
let amount5 = expense.amount;

//es6
const {type,amount} = expense;

/***********************************************************************************/

let savedFiled = {
    extension: 'jpg',
    name: 'report',
    size: 14040
};

//es5
function fileSummary5 (obj) {
    return `the file ${obj.name}.${obj.extension} is of size ${obj.size}`;
}

console.log(
    fileSummary5(savedFiled)
);


//es6
function fileSummary6({name,size,extension}, {anotherFile}) {
    return `the file ${name}.${extension} is of size ${size} and got 1 ${anotherFile}`;
}

console.log(
    fileSummary6(savedFiled,{anotherFile : 'extra'})
);
