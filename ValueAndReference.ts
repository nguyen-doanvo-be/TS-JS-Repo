// VALUE TYPE: it holds a data value within its own memory space. It means the letiables of these data types directly contain values.
// data types is value type: string, number, boolean, undefined, null, symbol, bigint

function changeValue(value: number): void {
    let x: number = 200;
    console.log(x);
}

let i: number = 100;
console.log(i); // Output: 100
changeValue(i); // Output: 200
console.log(i); // Output: 100

// REFERENCE TYPE: reference type doesn't store its value directly. Instead, it stores the address where the value is being stored. 
// In other words, a reference type contains a pointer to another memory location that holds the data.
// data types is reference type: string, array, object, class,..

class Student {
    name: string;

    constructor() {
        this.name = "";
    }
}

function changeReferenceValue(std2: Student): void {
    std2.name = "Rahul";
}

let std1: Student = new Student();
std1.name = "Rohit";
changeReferenceValue(std1);
console.log(std1.name);

//
let personObj1 = {
    name: 'Alex',
    age: 30
};

let person = personObj1;
person.age = 25;

person = {
    name: 'John',
    age: 50
};

let personObj2 = person;

console.log(personObj1); //Output: {name: Alex, age: 25}
console.log(personObj2); //Output: {name: John, age: 50}