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
for(let color of colors()){
    arrColors.push(color);
}

console.log(arrColors);