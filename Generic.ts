// GENERIC: allow to create reusable components that can work with a variety of types. They are essential for writing flexible and type-safe code.
// BASIC SYNTAX:
// function identity<T>(arg: T): T {
//     return arg;
// }

function example<T>(arg: T): T {
    return arg;
}

let out1 = example<string>("Hello");
let out2 = example<number>(100);

console.log(out1);
console.log(out2);

// GENERIC CONSTRAINT
interface LengthWise {
    length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length: 10, value: 3});
console.log(loggingIdentity("Hello"))