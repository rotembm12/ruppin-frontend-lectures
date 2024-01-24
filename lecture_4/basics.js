//  BASIC SYNTAX AND CONCEPTS

// Variables
var name = "John Doe"; // var: Function-scoped or globally-scoped
let age = 30; // let: Block-scoped, can be reassigned
const PI = 3.14; // const: Block-scoped, cannot be reassigned

// Data Types
let stringType = "Hello, World!"; // String
let booleanType = true; // Boolean (true or false)
let integerType = 25; // Number (integer)
let floatType = 3.14; // Number (floating point)

// Special Data Types: null and undefined
let emptyValue = null; // null: Represents a deliberate non-value
let uninitialized; // undefined: Variable declared but not assigned

// Arrays
let array = ["apple", "banana", "cherry"];

// Common Array Methods
array.push("date"); // Adds a new element to the end
array.pop(); // Removes the last element
array.unshift("kiwi"); // Adds a new element to the beginning
array.shift(); // Removes the first element
let slicedArray = array.slice(1, 3); // Returns selected elements as a new array
array.forEach((item) => console.log(item)); // Executes a provided function once for each array element

// Objects
let object = {
  name: "John",
  age: 30,
};

// FUNCTIONS

// Regular function
function greet() {
  console.log("Hello, World!");
}
greet();

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

// CONTROL FLOW

// If statement
if (age > 18) {
  console.log("Adult");
}

// Ternary Operator
let drinkingAge = age >= 21 ? "Can drink" : "Cannot drink";
console.log(drinkingAge);

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// COMPARISON OPERATORS

// Equal to
console.log(5 == "5");

// Strictly equal to
console.log(5 === "5");

// Strictly not equal to
console.log(5 !== "5");

// Greater than, less than
console.log(5 > 3);
console.log(5 < 3);

// TYPEOF OPERATOR

console.log(typeof "Hello"); // "string"
console.log(typeof 5); // "number"

// COMMON STRING METHODS

let text = "Hello, World!";
console.log(text.length); // Length of string
console.log(text.toUpperCase()); // Converts to uppercase
console.log(text.toLowerCase()); // Converts to lowercase
console.log(text.includes("World")); // Checks if string contains a specified value
console.log(text.slice(0, 5)); // Extracts a part of a string
console.log(text.replace("World", "There")); // Replaces a specified value with another

// DATE OBJECT

let now = new Date(); // Current date and time
console.log(now);
console.log(now.getFullYear()); // Gets the year
console.log(now.getMonth()); // Gets the month (0-11)
console.log(now.getDate()); // Gets the day of the month
console.log(now.getDay()); // Gets the day of the week (0-6)
console.log(now.getHours()); // Gets the hour (0-23)
console.log(now.getMinutes()); // Gets the minutes (0-59)
console.log(now.getSeconds()); // Gets the seconds (0-59)

// ERROR HANDLING

// Try-catch
try {
  let result = riskyOperation();
} catch (error) {
  console.log(error);
}

// This file now includes common methods for arrays and strings, as well as basic operations with the Date object.
