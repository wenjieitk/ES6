// question 1 
const arrays = ['a','bb','ccc','dddd','eeeee','ffffff','ggggggg','hhhhhhhhhh'];

let longest = arrays.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(`Question 1 : ${longest}`);


// question 2
let recursive = n => (n === 1) ? 1 : n += recursive(n-1);
const n = 5;
console.log(`Question 2 : ${recursive(n)}`);


// question 3
const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8,10];
const arr3 = [11,13,15,17,19];
const arr4 = [12,14,16,18,100];
const k = 9;

let leastNums = (k,...nums) => nums.sort((a, b) => a - b).slice(0,k);
console.log(`Question 3 : ${leastNums(k,...arr1,...arr2)}`);


// question 4
// I don't really understand the requirement of question 4, so i just simply code a simple solution for it according to the output given
class Employee {
    constructor({id,name,manager}){
        this.id = id;
        this.name = name;
        this.manager = manager;
    }
}

const employees = [
    new Employee({id: 1,name: 'e1',manager: null}),
    new Employee({id: 2,name: 'e2',manager: 'e1'}),
    new Employee({id: 3,name: 'e3',manager: 'e1'}),
    new Employee({id: 4,name: 'e4',manager: 'e2'}),
    new Employee({id: 5,name: 'e5',manager: 'e2'}),
    new Employee({id: 6,name: 'e6',manager: 'e3'}),
    // new Employee({id: 7,name: 'e7',manager: 'e3'}),
    // new Employee({id: 8,name: 'e8',manager: 'e3'}),
    // new Employee({id: 9,name: 'e9',manager: 'e4'}),
    // new Employee({id: 10,name: 'e10',manager: 'e5'}),
    // new Employee({id: 11,name: 'e11',manager: 'e2'}),
    // new Employee({id: 12,name: 'e12',manager: 'e3'})
];

let reportree = (es,list = []) => {
    es = Array.isArray(es) ? es : [es];
    let finalList = es.reduce((list,e) => list.concat(...lookForManager(e)),[]);
    (finalList.length > 0) ? reportree(finalList, [...list,...finalList]) : console.log(`Question 4 : ${list}`);
}

function lookForManager (e) {
    return employees.reduce((list,employee) => {
        if(employee.manager === e)
            list.push(employee.name);
            return list;
    },[]);
}

reportree('e1');