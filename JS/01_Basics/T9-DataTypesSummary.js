// JavaScript Data Types

// 1. Primitive Data Types
// Stores single values.

// String
"Hello"
"123"

// Number
25
10.5

// Boolean
true
false

// Undefined
let a;

// Null
let b = null;

// BigInt
12345678901234567890n

// Symbol
Symbol("id")


// 2. Non-Primitive Data Types
// Stores collections or complex data.

// Object
let person = {
    name: "Bulbul",
    age: 22
};

// Array
let fruits = ["Apple", "Mango", "Banana"];

// Function
function greet() {
    console.log("Hello");
}


// 3. Important Differences

// Primitive: Compared by value
let x = 10;
let y = 10;

console.log(x === y); // true


// Non-Primitive: Compared by reference
let obj1 = { age: 22 };
let obj2 = { age: 22 };

console.log(obj1 === obj2); // false


// 4. typeof Operator

typeof "Hello"     // "string"
typeof 25          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof 123n        // "bigint"
typeof Symbol()    // "symbol"
typeof {}          // "object"
typeof []          // "object"
typeof null        // "object" (historical JavaScript quirk)
typeof function(){} // "function"




const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id == anotherId); // Because every time you create a Symbol(), JavaScript creates a unique value, even if both symbols have the same description.