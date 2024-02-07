//#region forEach Examples
let animals = ["Lion", "Tiger", "Elephant", "Giraffe"];

animals.forEach((animal, index, array) => {
  console.log(animal);
});

let animalCharacteristics = [
  { name: "Lion", habitat: "Savannah" },
  { name: "Penguin", habitat: "Antarctic" },
];

animalCharacteristics.forEach((animal) => {
  console.log(`${animal.name} lives in the ${animal.habitat}`);
  // animal.name + " live in the " + animal.habitat;
});

animals = ["Dog", "Cat", "Chicken", "Horse"];
animals.forEach((animal) => {
  console.log(`${animal} has ${animal === "Chicken" ? 2 : 4} legs`);
});

let animalSounds = ["Roar", "Meow", "Bark", "Neigh"];

animalSounds.forEach((sound) => {
  alert(sound);
  // sound += "sadsa"; cant do that
});

animalSounds.forEach(function (sound) {
  alert(sound);
});
//#endregion

//#region map Examples
animals = ["Lion", "Tiger", "Elephant", "Giraffe"];

const animalsLength = animals.map((animal) => {
  return animal.length;
});

console.log(nameLengths);

animals = ["lion", "tiger", "elephant", "giraffe"];
let upperCaseAnimals = animals.map((animal) => animal.toUpperCase());
console.log(upperCaseAnimals);

animals = ["Dog", "Cat", "Fish"];
let animalObjects = animals.map((animal) => {
  return { name: animal };
});
console.log(animalObjects);

animals = ["Lion", "Tiger", "Elephant"];
let greetings = animals.map((animal) => `Hello, I am a ${animal}!`);
console.log(greetings);
//#endregion

//#region filter Examples
animals = ["Lion", "Salmon", "Frog", "Eagle"];
let landAnimals = animals.filter((animal) => animal !== "Salmon");
console.log(landAnimals);

animals = ["Cat", "Dog", "Elephant", "Fox"];
let longNamedAnimals = animals.filter((animal) => animal.length > 3);
console.log(longNamedAnimals);

animals = ["Lion", "Tiger", "Leopard", "Giraffe"];
let lAnimals = animals.filter((animal) => animal.startsWith("L"));
console.log(lAnimals);

animals = ["Eagle", "Shark", "Dolphin", "Sparrow"];
let nonBirds = animals.filter(
  (animal) => animal !== "Eagle" && animal !== "Sparrow"
);
console.log(nonBirds);
//#endregion

//#region find Examples
animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
let foundAnimal = animals.find((animal) => animal === "Elephant");
console.log(foundAnimal);

animals = ["Cat", "Dog", "Elephant", "Fox"];
foundAnimal = animals.find((animal) => animal.length === 3);
console.log(foundAnimal);

animals = ["Lion", "Giraffe", "Elephant", "Tiger"];
foundAnimal = animals.find((animal) => animal.startsWith("G"));
console.log(foundAnimal);

animals = ["Lion", "Salmon", "Eagle", "Shark"];
let aquaticAnimal = animals.find(
  (animal) => animal === "Salmon" || animal === "Shark"
);
console.log(aquaticAnimal);
//#endregion

//#region reduce Examples
animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
let totalLetters = animals.reduce((total, animal) => total + animal.length, 0);
console.log(totalLetters);

animals = ["Lion", "Tiger", "Elephant"];
let concatenatedNames = animals.reduce((concat, animal) => concat + animal, "");
console.log(concatenatedNames);

animals = ["Dog", "Cat", "Dog", "Cat", "Dog"];
let count = animals.reduce((acc, animal) => {
  acc[animal] = (acc[animal] || 0) + 1;
  return acc;
}, {});
console.log(count);

animals = ["Lion", "Giraffe", "Elephant"];
let longestName = animals.reduce(
  (longest, animal) => (longest.length > animal.length ? longest : animal),
  ""
);
console.log(longestName);
//#endregion
