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

const car = new Car({title:'Toyota'});

console.log(
    car,
    car.drive()
)