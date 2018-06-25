let expense = {
    type : "Business",
    amount : 45
}

//es5
let type5 = expense.type;
let amount5 = expense.amount;

//es6
const {type,amount} = expense;