let numbers = [1,1,2,3,4,4];

// const unique = (array) => array.reduce((prevs, item) => {
//     return prevs.find((prev) => prev === item) ? prevs : prevs.concat(item)
//   }, [])

function unique(arrays){
    return arrays.reduce((newArray, item) => {
        if(!newArray.find((element) => element === item)){
            newArray.push(item);
        }
        return newArray;
    },[]);
}



let result = unique(numbers);
console.log(result);
