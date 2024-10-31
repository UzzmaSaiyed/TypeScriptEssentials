//creating functions in TypeScript

function addNumber(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(addNumber(5, 10));

//Default values for parameters, type declarations not necessary for default value parameters
function greet(name: string = "Jenna", age = 28): void {
    console.log(`Hello, ${name}! Your age is ${age}!`);
}

greet("John", 25);
greet();

//creating classes in TypeScript
//let is not allowed inside class, function keyword is also not allowed inside class

class Product {
    id: number = 0;
    name: string = "";
    price: number = 0;
    quantity: number = 0;

    //forcing null value, not by default in TS and JS

    printDetails = () =>
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);

}

let p1 = new Product();
p1.id = 1;
p1.name = "Book";
p1.price = 100;
p1.quantity = 10;

p1.printDetails();

//Parameterized Constructor
class Product1 {
    private id: number;
    private name: string;
    private price: number;
    private quantity: number;

    constructor(id: number, name: string, price: number, quantity: number = 9) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    printDetails = () =>
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);

}

let p2 = new Product1(2, "Laptop", 1000, 5);
p2.printDetails();

// p2.id; Not Accessible
// p1.id; Accessible

//private keyword in constructor parameters
class Product2 {
    constructor(private id: number, private name: string, private price: number, private quantity: number = 9) {
    }
    printDetails = () =>
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
}

let p3 = new Product2(3, "Mobile", 10000, 7);
p3.printDetails();

//interface and classes : interfaces are blueprint for classes

interface Userr {
    name: string
    age: number
    printUserDetails(): void
}


class Teacher implements Userr {
    name = ""
    age = 0
    hobbies: string[] = []
    printUserDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}`);
    }
}

let t1 = new Teacher();
t1.name = "Jane";
t1.age = 30;
t1.hobbies = ["Reading", "Teaching"];
t1.printUserDetails();

//static methods

class MathUtils {
    static addNumbers(n1: number, n2: number): number {
        return n1 + n2;
    }
}
console.log(MathUtils.addNumbers(5, 10));

//Generics
//T is for type, type is decided at the time of calling instead of creation

function printArray<T>(items: T[]): void {
    console.log(items);
}

printArray<number>([1, 2, 3, 4, 5]);

function createArray<T>(items: T[]): void {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}

createArray<string>(["Apple", "Banana", "Cherry"]);

























