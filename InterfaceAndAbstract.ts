// INTERFACE: defined a contract that class must follow
// using it when we just want to define methods and properties
interface Vehicle {
    name: string;
    wheels: number;
    start(): void;
}

class Car implements Vehicle {
    name: string;
    wheels: number;

    constructor(name: string) {
        this.name = name;
        this.wheels = 4;
    }

    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}

let car1 = new Car('Mercesdes');
car1.start();
car1.stop();
// ABSTRACT: a class that cannot be instantiated but can be inherited
abstract class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number) {
        this.name = name;
        this.legs = legs;
    }

    abstract makeSound(): void;
}

class Dog extends Animal {
    color: string;
    constructor(name: string, legs: number, color: string) {
        super(name, legs);
        this.color = color;
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

let dog1 = new Dog('Husky', 4, 'black and white');
dog1.makeSound();