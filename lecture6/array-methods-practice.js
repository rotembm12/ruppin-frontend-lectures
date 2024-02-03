// Function to practice forEach
function logEachAnimal(animals) {
  // Your forEach logic here
  // Example: animals.forEach(animal => console.log(animal));
}

// Function to practice map
function getAnimalNameLengths(animals) {
  // Your map logic here
  // Example: return animals.map(animal => animal.length);
}

// Function to practice filter
function filterLandAnimals(animals) {
  // Your filter logic here
  // Example: return animals.filter(animal => animal !== 'Fish');
}

// Function to practice find
function findFirstLargeAnimal(animals) {
  // Your find logic here
  // Example: return animals.find(animal => animal.length > 5);
}

// Function to practice reduce
function getTotalNumberOfLegs(animals) {
  // Your reduce logic here
  // Example: return animals.reduce((total, animal) => total + 4, 0); // assuming each animal has 4 legs
}

// Example array of animals to test the functions
let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Fish"];

// Testing the functions
console.log("forEach result:");
logEachAnimal(animals);

console.log("\nmap result:");
console.log(getAnimalNameLengths(animals));

console.log("\nfilter result:");
console.log(filterLandAnimals(animals));

console.log("\nfind result:");
console.log(findFirstLargeAnimal(animals));

console.log("\nreduce result:");
console.log(getTotalNumberOfLegs(animals));
