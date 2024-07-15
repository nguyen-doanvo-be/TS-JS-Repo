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
let obj = {
    name: 'John',
    age: 30,
    action() {
        console.log('Running');
    }
};

obj.action();