/**
 * every = if one false, then false
 * some = if one true, then true
 */

let computers = [
    {name : 'Apple', ram : 23},
    {name : 'HP', ram : 12},
    {name : 'Lenovo', ram : 32},
];

let isEveryPcHas16GbOfRam = computers.every((computer) =>{
    return computer.ram > 16;
});

console.log(isEveryPcHas16GbOfRam); // not all the pc has 16GB of ram

let isAnyPcHas16GbOfRam = computers.some((computer) => {
    return computer.ram>16;
});

console.log(isAnyPcHas16GbOfRam);