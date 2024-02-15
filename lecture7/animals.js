const addAnimalForm = document.getElementById("add-animal-form");

let animals;

if (localStorage.getItem("animals")) {
  const stringifiedAnimals = localStorage.getItem("animals");
  animals = JSON.parse(stringifiedAnimals);
} else {
  animals = [];
}

function renderAnimals(animals) {
  // define how animal card looks like
  const cards = [];
  animals.forEach((animal) => {
    const card = `<div style="border: 1px solid black;"> ${animal.name} - ${animal.sound} </div>`;
    cards.push(card);
  });
  const animalsWrapper = document.getElementById("animal-list");
  animalsWrapper.innerHTML = cards.join("");
}

addAnimalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("animal-name");
  const soundInput = document.getElementById("animal-sound");

  if (!nameInput || !soundInput) {
    // error flow
    alert("something went wrong");
    return;
  }

  if (!nameInput.value || !soundInput.value) {
    // validate there is a text in the inputs
    alert("you must provide animal inputs");
    return;
  }

  const animal = {
    name: nameInput.value,
    sound: soundInput.value,
  };

  animals.push(animal);

  const stringifiedAnimals = JSON.stringify(animals);

  localStorage.setItem("animals", stringifiedAnimals);

  renderAnimals(animals);

  // remove inputs current value
  nameInput.value = "";
  soundInput.value = "";
});

renderAnimals(animals);
