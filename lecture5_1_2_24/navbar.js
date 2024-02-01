const user = {
  id: 10,
  name: "rotem",
  age: 31,
  printAge() {
    console.log(this)
  }

}

const user2 = {
  id: 10,
  name: "rotem",
  age: 21321,
  printAge() {
    console.log(this.age)
  }
}

const ul = document.querySelector("ul");
console.log(ul.style, ul.className);



const openMenuButton = document.querySelector("#mobile-nav button");




function setMenuPosition(xCoord) {
  console.log(xCoord)
  const menu = document.querySelector(".floating-menu");
  menu.style.transform = `translateX(${xCoord})`;
}

document.querySelector("#desktop-nav ul").addEventListener("keydown", function(event) {
  console.log(event.target)
})


openMenuButton.addEventListener("click",  (event) => {
  console.log(event);
  setMenuPosition(0)
})


const closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener("click", () => setMenuPosition("-105%"));

