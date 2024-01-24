console.log("Hello world!"); // Print to the console in dev tools

var name = "Rotem";
name = 10;

// like var but newer - use that
let lastname = "Rotem";
lastname = true;

// constant variable - cannot be changed
const x = 10;
// x = 11; ERROR

for (let index = 0; index < 10; index++) {
  console.log(index);
}

const fruits = ["1", "2", "3", 51, true, [1, 2, 3]]; // Array

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

let secondIndex = 0;
while (secondIndex < fruits.length) {
  console.log(fruits[secondIndex]);
  secondIndex++;
}

alert("Some message");
const age = prompt("whats your age");

const y = 10;

//   "11" == 11; // true
//   "11" === 11; // false
