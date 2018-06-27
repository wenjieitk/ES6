/**
 * abondon .next() to run the yield function
 * don't have to run one more extra time to return the result and get all the func done
 */

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'yellow';
};


const arrColors = [];
for(let color of colors()){ // execute iterator function here
    arrColors.push(color); // store result here
}

console.log(arrColors);

/*********************************************************************************/
// to get all the member name from ourTeam

const ourTeam = {
    size : 3,
    location : 'mmu',
    lead : 'Jill',
    manager : 'Alex',
    engineer : 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of TeamIterator(ourTeam)){ // execute iterator function here
    names.push(name); // store result here
};

console.log(names);
