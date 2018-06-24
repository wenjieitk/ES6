/**
 * `${}`
 * no longer need '+' to concat the string
 */

let year = new Date().getFullYear();

function getMessage() {
    return `this year is ${year} and now is ${new Date().getTime()}`
}

console.log(getMessage());