class Customer {
    private name: string;
    private age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Get the Customer's name
    getName(): string {
        return this.name;
    }

    // Set the Customer's name
    setName(name: string): void {
        this.name = name;
    }

    // Get the Customer's age
    getAge(): number {
        return this.age;
    }

    // Set the Customer's age
    setAge(age: number): void {
        this.age = age;
    }

    // Get the Customer's address
    getAddress(): string {
        return this.address;
    }

    // Set the Customer's address
    setAddress(address: string): void {
        this.address = address;
    }

    // Display Customer's information
    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}


class Queue<T> {
    private items: T[] = [];

    // Add an item to the end of the queue
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Remove and return the item at the front of the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    // Return the item at the front of the queue without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.items.length;
    }

    // Clear all items from the queue
    clear(): void {
        this.items = [];
    }
}

// Example usage:
const queue = new Queue<Customer>();
const customer1 = new Customer("John Doe", 30, "123 Main St");
const customer2 = new Customer("Jane Doe", 28, "456 Elm St");
const customer3 = new Customer("Alice Smith", 25, "789 Oak St");

queue.enqueue(customer1);
queue.enqueue(customer2);
queue.enqueue(customer3);

console.log(queue.peek()?.displayInfo()); // Output: Name: John Doe, Age: 30, Address: 123 Main St
console.log(queue.dequeue()?.displayInfo()); // Output: Name: John Doe, Age: 30, Address: 123 Main St
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.isEmpty()); // Output: true
