var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.drive = function () {
        console.log("Engine is running");
    };
    return Engine;
}());
var Wheel = /** @class */ (function () {
    function Wheel() {
    }
    Wheel.prototype.drive = function () {
        console.log("Wheels are spining");
    };
    return Wheel;
}());
var Car = /** @class */ (function () {
    //composision 
    function Car() {
        this.engine = new Engine();
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }
    //deligation 
    Car.prototype.drive = function () {
        this.engine.drive();
        for (var i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    };
    return Car;
}());
var bmw = new Car();
bmw.drive();
