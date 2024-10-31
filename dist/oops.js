"use strict";
function addNumber(n1, n2) {
    return n1 + n2;
}
console.log(addNumber(5, 10));
function greet(name = "Jenna", age = 28) {
    console.log(`Hello, ${name}! Your age is ${age}!`);
}
greet("John", 25);
greet();
class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
        this.printDetails = () => console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}
let p1 = new Product();
p1.id = 1;
p1.name = "Book";
p1.price = 100;
p1.quantity = 10;
p1.printDetails();
class Product1 {
    constructor(id, name, price, quantity = 9) {
        this.printDetails = () => console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
let p2 = new Product1(2, "Laptop", 1000, 5);
p2.printDetails();
class Product2 {
    constructor(id, name, price, quantity = 9) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.printDetails = () => console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}
let p3 = new Product2(3, "Mobile", 10000, 7);
p3.printDetails();
class Teacher {
    constructor() {
        this.name = "";
        this.age = 0;
        this.hobbies = [];
    }
    printUserDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}`);
    }
}
let t1 = new Teacher();
t1.name = "Jane";
t1.age = 30;
t1.hobbies = ["Reading", "Teaching"];
t1.printUserDetails();
class MathUtils {
    static addNumbers(n1, n2) {
        return n1 + n2;
    }
}
console.log(MathUtils.addNumbers(5, 10));
function printArray(items) {
    console.log(items);
}
printArray([1, 2, 3, 4, 5]);
function createArray(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
createArray(["Apple", "Banana", "Cherry"]);
