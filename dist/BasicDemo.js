"use strict";
let a = 2;
console.log(a);
let b = "hello";
console.log(b);
let flag = false;
console.log(flag);
let c;
c = 3;
c = "hello world";
console.log(c);
let d = 90;
d = "world";
console.log(d);
let array = ["hello", "world", "flower"];
array.push("banana");
console.log(array);
let person = [34, "Book"];
console.log(person);
let unionType = 10;
unionType = "hello";
console.log(unionType);
let emp = {
    id: 1,
    name: "John",
    salary: 5000
};
console.log(emp);
let Emp = {
    id: 2,
    name: "Jenna",
    salary: 50000,
    hobbies: ["Read", "Write", "Dance"]
};
console.log(Emp);
let user = {
    id: 3,
    name: "Jane",
    salary: 60000,
    hobbies: ["Read", "Write", "Dance"],
    Eid: 4,
    address: { city: "New York", state: "NY" }
};
console.log(user);
let color = "red";
console.log(color);
let category;
category = "groceries";
console.log(category);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 5] = "Red";
    Colors[Colors["Blue"] = 6] = "Blue";
    Colors[Colors["Green"] = 7] = "Green";
})(Colors || (Colors = {}));
console.log(Colors);
let enumColor = Colors.Green;
console.log(enumColor);
var Category;
(function (Category) {
    Category[Category["Clothing"] = 0] = "Clothing";
    Category[Category["Electronic"] = 1] = "Electronic";
    Category[Category["Groceries"] = 2] = "Groceries";
})(Category || (Category = {}));
let enumCategory = Category.Groceries;
console.log(enumCategory);
let user1 = {
    id: 1,
    name: "John",
    age: 30
};
console.log(user1);
user1.name = "Jennaa";
console.log(user1.name + " " + user1.age);
let user2 = {
    id: 2,
    name: "Jenna",
    age: 30,
    Eid: 4,
    address: { city: "New York", state: "NY" }
};
console.log(user2);
let user3 = {
    id: 3,
    name: "Jen",
    age: 34,
    Eid: 6,
    address: { city: "Cincinnati", state: "Ohio" }
};
console.log(user3);
