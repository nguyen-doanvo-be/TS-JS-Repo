// TYPE: used for defining custom data types for some simple data type or using complex type(union, intersection), OOP or aliases
type ID = string | number;
type code = string | number;

type User = {
    name: string;
    age: number;
}

let userID: ID = 123;
let user: User = {name: 'Nguyen', age: 21};

console.log(userID, user);


class Car {
    carID: ID;
    carName: string;
    carCode: code

    constructor(id: ID, name: string, code: code) {
        this.carID = id;
        this.carName = name;
        this.carCode = code;
    }

    getFullInformation() {
        console.log(`${this.carID} - ${this.carName} - ${this.carCode}`);
    }
}

let car1 = new Car(123, 'BMW', 'B123');
car1.getFullInformation();

// INTERFACE: is a reference type contain constant and method, not handle it, class implementations must follow the contract
// interface IUser {
//     name: string;
//     age: number;
//     greet(): void;
// }

// class User implements IUser {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     getAge() {
//         return this.age;
//     }

    // Required function, if not will be error
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// let person = new User('Nguyen', 21);
// console.log(person.getAge());
// person.greet();

// CLASSES: define a blueprint for creating objects with specific properties and methods, support extends
class Employee {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getFullInformation() {
        console.log(`${this.name} - ${this.age} - ${this.address}`);
    }

    getName() {
        return this.name;
    }
}

class Intern extends Employee {
    supportSalary: number;

    constructor(name: string, age: number, address: string, supportSalary: number) {
        super(name, age, address);
        this.supportSalary = supportSalary;
    }

    getSalary() {
        return this.supportSalary;
    }
}

class Dev extends Employee {
    OT: number;

    constructor(name: string, age: number, address: string, OT: number) {
        super(name, age, address);
        this.OT = OT
    }
    getOT() {
        return this.OT;
    }
}

let intern1 = new Intern('Nguyen', 21, 'HN', 1000);
intern1.getFullInformation();
let dev1 = new Dev('Manh', 25, 'HN', 10);
dev1.getFullInformation();
console.log(dev1.getOT())

// OBJECT: is a data structure to store key-value, don't need to extends or complex action like class or interface
let myMotor = {
    color: 'red',
    name: 'Honda',
    engine: {cylinders: 4, size: 2.2},
}




