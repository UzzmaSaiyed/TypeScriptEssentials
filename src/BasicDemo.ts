//tsc demo1.ts -- to compile typescript to javascript
//node demo1.js -- to compile js and execute it
//tsc --init -- to generate typescript config file
//tsc -- to generate js according to ts config
//tsc --watch -- to watch typescript changes, compiler is running in watch mode

//Declaration by specifying type of variables
let a: number = 2;
console.log(a);
// a="error";

let b: string = "hello";
console.log(b);

let flag: boolean = false;
console.log(flag);


//type inference
let c;
c = 3;
c = "hello world";
console.log(c);

let d: any = 90;
d = "world";
console.log(d);

//array
let array: string[] = ["hello", "world", "flower"];
array.push("banana");
console.log(array);

//tuple
let person: [number, string] = [34, "Book"];
console.log(person);

//union: multiple type to a single variable
let unionType: number | string = 10;
unionType = "hello";
console.log(unionType);

//object in js
// let emp = {
//     id: 1,
//     name: "John",
//     salary: 5000
// }

//object in typescript
let emp: { id: number, name: string, salary: number } = {
    id: 1,
    name: "John",
    salary: 5000
}
console.log(emp);

//custom type
type Person = { id: number, name: string, salary: number, hobbies: string[] }

//object of type Person
let Emp: Person = {
    id: 2,
    name: "Jenna",
    salary: 50000,
    hobbies: ["Read", "Write", "Dance"]
}
console.log(Emp);
type Address = { city: string, state: string }
//Giving type to address
type Employee = { Eid: number, address: Address }

//intersection type: combine properties of two types into one type
let user: Person & Employee = {
    id: 3,
    name: "Jane",
    salary: 60000,
    hobbies: ["Read", "Write", "Dance"],
    //order does not matter
    Eid: 4,
    address: { city: "New York", state: "NY" }

}
console.log(user);

//literal type 
type Color = "red" | "blue" | "green";
let color: Color = "red";
console.log(color);

let category: "clothing" | "electronic" | "groceries"
category = "groceries"
console.log(category);

//enums : collections of constants
enum Colors { Red = 5, Blue, Green }
console.log(Colors)
let enumColor: Colors = Colors.Green;
console.log(enumColor);

enum Category { Clothing, Electronic, Groceries }
let enumCategory: Category = Category.Groceries;
console.log(enumCategory);
//output starts from 0 by default

//interface: Collections of properties and it also acts as a type,blueprint
interface User {
    id: number;
    name: string;
    readonly age: number;
    hobby?: string
    //making hobby optional
}

//object of interface type User
let user1: User = {
    id: 1,
    name: "John",
    age: 30
}
console.log(user1);

//Difference between type and interface: at base level almost similar, using type we can create literal types, unions but cannot be done in interface

user1.name = "Jennaa"
// user1.age = 32 ,error here because age is readonly
console.log(user1.name + " " + user1.age)

//intersection between interfaces and also with type is possible
interface Employeee { Eid: number, address: Address }
let user2: User & Employeee =
{
    id: 2,
    name: "Jenna",
    age: 30,
    Eid: 4,
    address: { city: "New York", state: "NY" }
}
console.log(user2);

interface Employeee { Eid: number, address: Address }
let user3: User & Employee =
{
    id: 3,
    name: "Jen",
    age: 34,
    Eid: 6,
    address: { city: "Cincinnati", state: "Ohio" }
}
console.log(user3);












