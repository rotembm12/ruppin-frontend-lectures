// Function to practice forEach
function logEachAnimal(animals) {
  animals.forEach((animal) => console.log(animal));
  // Your forEach logic here
  // Example: animals.forEach(animal => console.log(animal));
}

// Function to practice map
function getAnimalNameLengths(animals) {
  // const newArray = animals.map(function (animal) {
  //   return animal.length;
  // });
  const newArray = animals.map((animal) => animal.length);
  return newArray;

  // Your map logic here
  // Example: return animals.map(animal => animal.length);
}

// Function to practice filter
function filterLandAnimals(animals) {
  const filteredAnimals = animals.filter(
    (animal) => animal.startsWith("F") && animal.endsWith("h")
  );
  // animals.filter((animal) => {
  //   const isStartWithLetterF = animal.startsWith("F");
  //   const isEndsWithLetterH = animal.endsWith("h");
  //   return isStartWithLetterF && isEndsWithLetterH;
  // });
  return filteredAnimals;
  // Your filter logic here
  // Example: return animals.filter(animal => animal !== 'Fish');
}

// Function to practice find
function findFirstLargeAnimal(animals) {
  const foundedAnimal = animals.find((animal) => animal.length > 5);

  return foundedAnimal;
  // Your find logic here
  // Example: return animals.find(animal => animal.length > 5);
}

// Function to practice reduce
// function getTotalNumberOfLegs(animals) {
//   // Your reduce logic here
//   // Example: return animals.reduce((total, animal) => total + 4, 0); // assuming each animal has 4 legs
// }

// Example array of animals to test the functions
let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Fish"];

// Testing the functions
console.log("forEach result:");
logEachAnimal(animals);

console.log("\nmap result:");
console.log(getAnimalNameLengths(animals));

console.log("\nfilter result:");
console.log(filterLandAnimals(animals));

console.log("\nfind resul t:");
console.log(findFirstLargeAnimal(animals));

// console.log("\nreduce result:");
// console.log(getTotalNumberOfLegs(animals));
