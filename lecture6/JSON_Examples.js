// JavaScript JSON Examples

//  Creating a JSON object
let jsonObject = { name: "Lion", age: 5, isWild: true };
console.log(jsonObject);

//  JSON string
let jsonString = '{"name": "Elephant", "age": 10, "isWild": true}';
console.log(jsonString);

//  Parsing JSON string to object
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

//  Converting object to JSON string
let stringifiedJson = JSON.stringify(jsonObject);
console.log(stringifiedJson);

//  Nested JSON object
let nestedJsonObject = {
  animal: {
    name: "Giraffe",
    attributes: {
      height: "5m",
      weight: "800kg",
    },
  },
};
console.log(nestedJsonObject);

//  Array of JSON objects
let animalsArray = [
  { name: "Lion", age: 5 },
  { name: "Tiger", age: 4 },
];
console.log(animalsArray);

//  Accessing JSON object properties
console.log(jsonObject.name); // Accessing the name of the animal

//  Modifying JSON object
jsonObject.name = "Panther";
console.log(jsonObject);

//  Deleting a property from JSON object
delete jsonObject.age;
console.log(jsonObject);
