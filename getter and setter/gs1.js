const person = {
    firstName: 'jie',
    lastName: 'sing',

    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);// jie sing
person.fullName = 'new name';
console.log(person.fullName);// new name
