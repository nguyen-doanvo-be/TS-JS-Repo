// ENUM VS OBJECT VS ARRAY
// ENUM: A way to define a set of named constants and limited, easy to read and maintain code
enum StatusCode {
    'Forbidden' = 403,
    'Unauthorized' = 401,
    'OK' = 200
}

let inputCode: number = 200;

if(inputCode === StatusCode.Forbidden) {
    console.log('Forbidden');
} else if(inputCode === StatusCode.Unauthorized) {
    console.log('Unauthorized');
} else if(inputCode === StatusCode.OK) {
    console.log('OK');
} else {
    console.log('Invalid status code');
}

// ARRAY: A way to define an ordered list of values have same data type and being changed equally
let arr: number[] = [1, 2, 3, 4, 5];
// OBJECT: A way to define an object with key-value pairs, more flexible to add, remove, and modify properties easily, it can include
// the type not primitive or a function
// use it when just need to defined a simple object, working with json or working with the ob
let obj = {
    name: 'John',
    age: 30,
    action() {
        console.log('Running');
    }
};

obj.action();


type Product = {
    productId: string;
    name: string;
    price: number;
}

interface ProductTech {
    productId: string;
    name: string;
    price: number;
    functionality(): void;
}

const laptop: Product = {
    productId: 'LAP224',
    name: 'Laptop Lenovo Ideadpad 3',
    price: 20500000
}

console.log(laptop);

const phone: ProductTech = {
    productId: 'IP221',
    name: 'iPhone 13',
    price: 13000000,
    functionality() {
        console.log('Calling...');
    }
}

