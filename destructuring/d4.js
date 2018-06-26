/**
 * convert array to object 
 * [4,5] -> {x:4,y:5}
 */

const points = [
    [4,5],
    [10,1],
    [0,40]
];

let obj = points.map(([x,y])=>{ // x = 4, y = 5
    return {x,y}; // {x:4, y:5}
});

console.log(obj);
//[ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]