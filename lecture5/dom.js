/*
JavaScript DOM (Document Object Model) is like a big tree that
represents everything on a webpage.
It's like taking a web page and breaking it down into
pieces that JavaScript can understand and work with.
These pieces include everything you see on the page, like text, images, buttons, and inputs.
*/

/*
The `document` object is like 
the main entry point to this tree.
It represents the whole web page, and you can
use it to access and change the page content, structure, and styles.
*/

// Commonly Used Methods and Properties:
//
const pageTitle = document.getElementById("pageTitle");
// This is like saying: "Find the part of the page that has the ID 'pageTitle'."

const boxes = document.getElementsByClassName("box");
// This is like saying: "Find all the parts of the page that are labeled as 'box'."

const firstButton = document.querySelector("button");
// This is like saying: "Find the first button on the page."

const allButtons = document.querySelectorAll("button");
// This is like saying: "Find every button on the page."

const newDiv = document.createElement("div");
// This is like saying: "Make a new empty box (div)."

const parent = document.getElementById("parentElement");
parent.appendChild(newDiv);
// This is like saying: "Put the new box inside the parent box."

const content = document.getElementById("content");
content.innerHTML = "<p>Hello World!</p>";
// This is like saying: "Write 'Hello World!' inside the 'content' part."

const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Button clicked!");
});
// This is like saying: "When the button is clicked, show a message."

//
//
//
// Modifying Elements and Using Events
const title = document.getElementById("pageTitle");
title.style.color = "blue";
// This changes the color of the title text to blue.

const description = document.querySelector(".description");
description.classList.add("highlight");
// This adds a new class 'highlight' to the description.

const clickMeButton = document.getElementById("clickMe");
clickMeButton.addEventListener("click", function () {
  alert("You clicked me!");
});
// When the "clickMe" button is clicked, it shows an alert message.

const textBox = document.getElementById("textBox");
textBox.value = "Hello there!";
// This changes the text in a text box to "Hello there!"

/*
The DOM is really powerful because it lets you interact with
and change everything on your webpage using JavaScript.
It's like having a remote control for your webpage,
where you can press buttons (write code) to make 
things happen and change what you see on the screen.
*/
