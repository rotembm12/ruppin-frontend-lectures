/*
JavaScript functions are an essential aspect of the language,
enabling modular, reusable code.
Let's break down their characteristics, compare 
them with functions in other languages like C#,
and explore their unique features and use cases in detail.
*/

// ### General Concept of Functions in Software:
// Functions in programming are like recipes.
// They take some ingredients (inputs), do something with them (process), and then give you something in return (output).
// They help in organizing code into blocks that perform specific tasks.

//**Example 1: Basic Function**
function add(a, b) {
  return a + b;
}
// This function adds two numbers.

//Example 2: Function Calling**
let result = add(5, 3);
console.log(result); // 8
// Here we use the add function to add 5 and 3.

//**Example 3: Function with No Return**
function sayHello(name) {
  console.log("Hello " + name);
}
// This function prints a greeting but doesn't return anything.

//--------------------
//
//
//
//
//
// Uniqueness of JavaScript Functions and Comparison to C# Functions:
// JavaScript functions are more flexible compared to C# functions.
// They can be assigned to variables, passed as arguments, and even returned from other functions.
// C# functions are more structured and statically typed.

//**Example 1: Function as Variable**
const multiply = function (a, b) {
  return a * b;
};
// In JavaScript, you can assign a function to a variable.

//**Example 2: Higher-Order Function**
function applyOperation(a, b, operation) {
  return operation(a, b);
}
// This function takes another function as an argument.

//**Example 3: Returning Functions**
function compareBy(propertyName) {
  return function (a, b) {
    return a[propertyName] - b[propertyName];
  };
}
// In JavaScript, a function can return another function.

//--------------------
//
//
//
//
//
// ### Arguments and Their Reference
// In JavaScript, function arguments are passed by value if they are primitive types
// (like numbers or strings)
// but - by reference if they are objects! (objects, arrays and functions are considered objects).

//**Example 1: Primitive Type Argument**
function changeValue(num) {
  num = 10;
}
let myNum = 5;
changeValue(myNum);
console.log(myNum); // 5
// Primitive type arguments don't change the original value.

//**Example 2: Object Type Argument**
function changeProperty(obj) {
  obj.property = "changed";
}
let myObj = { property: "original" };
changeProperty(myObj);
console.log(myObj.property); // "changed"
// Objects as arguments can be modified within the function.

//**Example 3: Default Parameters**
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // "Hello Guest"
// Default parameters are used when no argument is passed.

//--------------------
//
//
//
//
//
//### Function Type and How It's Really an Object
// In JavaScript, functions are first-class objects,
// meaning they can have properties and methods just like any other object.
// This feature allows for functional programming patterns.

//**Example 1: Function with Properties**
function count() {
  count.calls++;
}
count.calls = 0;

count();
count();
console.log(count.calls); // 2
// The function 'count' has a property 'calls'.

//**Example 2: Function as Object Property**
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator.add(2, 3)); // 5
// Here, 'add' is a method of the 'calculator' object.

//**Example 3: Function with Methods**
function speak() {
  console.log("Hello!");
}
speak.getGreeting = function () {
  return "Hello!";
};

console.log(speak.getGreeting()); // "Hello!"
// The function 'speak' also has a method 'getGreeting'.

//--------------------
//
//
//
//
//
//### Closure and Scope
//Closure in JavaScript is a function that remembers the
// variables from the place where it is defined,
//regardless of where it is executed later!
//
// Scope is the context where variables are declared.

//**Example 1: Basic Closure**
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}
const greetHello = createGreeting("Hello");
greetHello("Alice"); // "Hello, Alice"
// 'greetHello' remembers 'greeting' even outside its scope.

//**Example 2: Closure for Data Encapsulation**
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter());

// 2
// 'myCounter' has access to 'count' but it's not directly accessible outside.

// **Example 3: Closure in Loops**
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// This will print "3" three times, not 0, 1, 2.
// Because by the time the function is executed, the loop has already finished.

//**Example 4: Fixing Closure in Loops with IIFE**
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}
// This prints 0, 1, 2 as expected. The IIFE creates a new scope for each iteration.

//**Example 5: Closure with Private Variables**
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      balance -= amount;
    },
    getBalance: function () {
      return balance;
    },
  };
}
const account = bankAccount(100);
account.deposit(50);
account.withdraw(20);
console.log(account.getBalance()); // 130
// The balance variable is private to the 'bankAccount' function.

//--------------------
//
//
//
//
//
//### Anonymous Functions and Arrow Functions
// Anonymous functions are functions without a name.
// Arrow functions are a shorthand for writing anonymous functions and have
// some differences like not having their own `this`.

// **Example 1: Anonymous Function**
const logMessage = function (message) {
  console.log(message);
};
logMessage("Hello"); // "Hello"
// An anonymous function assigned to a variable.

//**Example 2: Arrow Function**
const addNumbers = (a, b) => a + b;
console.log(addNumbers(3, 4)); // 7
// An arrow function for adding two numbers.

//**Example 3: Difference in `this`**
function Person() {
  this.age = 0;
  setInterval(function growUp() {
    this.age++;
  }, 1000);
}
const p = new Person();
// 'this' inside growUp doesn't refer to the Person object.
// Versus:

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
  }, 1000);
}
const _p = new Person();
// 'this' in arrow function correctly refers to the Person object.

//--------------------
//
//
//
//
//
//### Anonymous Functions as a Variable
// Anonymous functions can be stored in variables,
// which is useful for callbacks and passing functions around.

//**Example 1: Callback Function**
const numbers = [1, 2, 3];
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6]
// An anonymous function is used to double each number in the array.

//**Example 2: Event Handler**
const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Button clicked!");
});
// An anonymous function as an event handler for button click.

//**Example 3: Immediately Invoked**
const _result = (function () {
  return "Immediate result";
})();
console.log(_result); // "Immediate result"
// An anonymous function that runs right away and returns a value.

//--------------------
//
//
//
//
//
//### Instantly Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined.
// It's often used to create a private scope.

// **Example 1: Basic IIFE**
(function () {
  var localVar = "private";
  console.log(localVar);
})();
// localVar is not accessible from outside.

//**Example 2: IIFE with Parameters**
(function (x, y) {
  console.log(x + y);
})(5, 3); // 8
// The function is immediately invoked with parameters 5 and 3.

//**Example 3: IIFE for Module Pattern**
const myModule = (function () {
  let privateVar = "private";
  return {
    publicMethod: function () {
      console.log(privateVar);
    },
  };
})();
myModule.publicMethod(); // "private"
// privateVar is not accessible from outside the module.

//--------------------
//
//
//
//
//
//### Functions as Arguments
//Passing functions as arguments allows for
// flexible code where functions can be used as values.

//**Example 1: Higher-Order Functions**
function map(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

let _doubled = map([1, 2, 3], function (num) {
  return num * 2;
});
console.log(_doubled); // Outputs: [2, 4, 6]
