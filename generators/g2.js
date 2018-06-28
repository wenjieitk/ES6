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
// Symbol.iterator - to load other team 

const theirTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    // Symbol.iterator to tell TeamIterator which to yield here
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const ourTeam = {
    theirTeam, //theirTeam (1)
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
    yield* team.theirTeam; //theirTeam (2) - yield everything in theirTeam
}

const names = [];
for (let name of TeamIterator(ourTeam)){ // execute iterator function here
    names.push(name); // store result here
};

console.log(names);
