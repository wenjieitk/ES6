let nums = [1,2,3,4,5];
let total = 0;

function addnum(num){
    total += num;
}

// foreach function   ##without ()##
nums.forEach(addnum);

console.log(total);