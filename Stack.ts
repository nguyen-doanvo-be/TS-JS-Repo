class Person {
    private name: string;
    private age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Get the person's name
    getName(): string {
        return this.name;
    }

    // Set the person's name
    setName(name: string): void {
        this.name = name;
    }

    // Get the person's age
    getAge(): number {
        return this.age;
    }

    // Set the person's age
    setAge(age: number): void {
        this.age = age;
    }

    // Get the person's address
    getAddress(): string {
        return this.address;
    }

    // Set the person's address
    setAddress(address: string): void {
        this.address = address;
    }

    // Display person's information
    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}


class Stack<T> {
    private items: T[] = [];

    // Add an item to the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove and return the top item from the stack
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    // Return the top item from the stack without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size(): number {
        return this.items.length;
    }

    // Clear all items from the stack
    clear(): void {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack<Person>();
const person1 = new Person("John Doe", 30, "123 Main St");
const person2 = new Person("Jane Doe", 28, "456 Elm St");
const person3 = new Person("Alice Smith", 25, "789 Oak St");

stack.push(person1);
stack.push(person2);
stack.push(person3);

console.log(stack.peek()?.displayInfo()); // Output: Name: Alice Smith, Age: 25, Address: 789 Oak St
console.log(stack.pop()?.displayInfo());  // Output: Name: Alice Smith, Age: 25, Address: 789 Oak St
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true


