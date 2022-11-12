// javascript variables

// var person = "Salma"; // string
// let animals = []; // array

// animals = person // valid javascript

// Typescript variables

let firstName: any = "John"; // convert variable type to any type like javascript
let height: number = 6;
let isDone: boolean = false;

firstName = height; // invalid typescript

// OO Typescript features

// interfaces
interface IVehicle {
    wheels: number;
    engine: string;
    drive();
}

// classes
class Car implements IVehicle {
    wheels: number;
    engine: string;

    // constructor
    constructor(wheels: number, engine: string) {
        this.wheels = wheels;
        this.engine = engine;
    }

    drive() {
        console.log('Driving...');
    }

}

let myCar = new Car(4, 'v8');
myCar.drive();