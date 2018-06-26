/**
 * Destructure Object in Array
 */
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park'},
    { name: 'Uber', location: 'San Francisco'}
];

const [{location}] = companies;

console.log(location); // Mountain View

/******************************************************************/

/**
 * Destructure Array in Object
 */
const Google = {
    branch: ['London','New York', 'Taiwan']
};

const {branch:[branch]} = Google;

console.log(branch); // London

