const numbers = [1, 2, 3];

function double([number, ...rest]) {  
    if(!number){
        console.log('return []');
        return [];
    }
    return [number*2, ...double(rest)]
}

// let double = ([number,...rest]) => rest.length>0 ? [number*2,...double(rest)] : [number*2]

console.log(
    double(numbers)
);