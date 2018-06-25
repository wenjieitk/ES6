/**
 * 'new' does not work with const-function
 */

// single expression 
// single argument
const add = a => a + 2;  // add (a) { return a+2 }


// arrow function does not work in this situation
const profile = {
    name: 'Alex',
    getName: function (name)  {
        return this.name
    }
};

//arrow function solve this situation
const team = {
    members: ['slex','dfdf'],
    teamName: 'abc',
    teamSum: function ( )  {
        return this.members.map(member =>  `${member} is on team ${this.teamName}`); //solve the type error in map
    }
};


console.log(team.teamSum());


