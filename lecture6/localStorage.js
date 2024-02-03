// Example 1: Storing a value
localStorage.setItem("key1", "value1");

// Example 2: Retrieving a value
let value = localStorage.getItem("key1");
console.log(value); // Outputs: value1

// Example 3: Removing a specific value
localStorage.removeItem("key1");

// Example 4: Storing a complex object (after converting it to a string)
let user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Example 5: Retrieving and parsing a stored object
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser); // Outputs: the user object

// Example 6: Clearing all local storage entries
localStorage.clear();

// Example 7: Storing an array
let colors = ["red", "green", "blue"];
localStorage.setItem("colors", JSON.stringify(colors));

// Example 8: Retrieving and parsing an array
let storedColors = JSON.parse(localStorage.getItem("colors"));
console.log(storedColors); // Outputs: ['red', 'green', 'blue']

// Example 9: Checking if a key exists in local storage
if (localStorage.getItem("key1") !== null) {
  console.log("key1 exists");
} else {
  console.log("key1 does not exist");
}

// Example 10: Storing the length of an array
let arrayLength = colors.length;
localStorage.setItem("colorsLength", arrayLength.toString());
