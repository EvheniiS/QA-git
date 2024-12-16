class Engine { 
    drive() {
        console.log(`Engine is running`)
    }

}

class Wheel {
    drive() {
        console.log(`Wheels are spining`)
    }

}

class Freshener {

}


class Car { 
    engine: Engine;
    wheels: Wheel[];
    freshener:Freshener;

//composision 
    constructor(freshener) {
    this.freshener = freshener;

    this.engine = new Engine();
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    }

//deligation 
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive()
        }
    }
b
}

const bmw = new Car()
bmw.drive();
