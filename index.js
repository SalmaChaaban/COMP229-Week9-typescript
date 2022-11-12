// javascript variables
// var person = "Salma"; // string
// let animals = []; // array
// animals = person // valid javascript
// Typescript variables
var firstName = "John"; // convert variable type to any type like javascript
var height = 6;
var isDone = false;
firstName = height; // invalid typescript
// classes
var Car = /** @class */ (function () {
    // constructor
    function Car(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var myCar = new Car(4, 'v8');
myCar.drive();
