const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

const clone = {...circle};

console.log(clone); //{ radius: 1, draw: [Function: draw] }

const reassignClone = Object.assign({
    color :'yellow',
},circle);

console.log(reassignClone); // { color: 'yellow', radius: 1, draw: [Function: draw] }


