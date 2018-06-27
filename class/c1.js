class Car {
    //initialize
    constructor({title}){
        this.title = title;
    }

    //function
    drive () {
        return 'vroom';
    }
}

/**
 * inheritance from Car
 * super() -> inherit parent; cannot user destructure
 */
class Toyota extends Car { 

    constructor(options) {
        super(options); // Car.constructor -> car.title
        this.color = options.color;
    }

    honk() {
        return 'beep from Toyota';
    }
}


const car = new Car({title:'Toyota'});
const toyota = new Toyota({color : 'red', title: 'daily drive'}); // inject 'title' which toyota dun have in constructor

console.log(
    car,
    car.drive(),
    toyota, 
    toyota.honk(),
    toyota.drive() // Car's func, toyota dun have it
)