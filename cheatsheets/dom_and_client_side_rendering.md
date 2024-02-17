The Document Object Model (DOM) is a programming interface provided by the browser that allows scripts to dynamically access and update the content, structure, and style of a document. The `document` object in JavaScript is the entry point into the DOM of a webpage. It contains methods and properties that allow you to create, access, and manipulate the elements and content of a webpage.

### Popular `document` Methods

1. **`getElementById(id)`** - Returns the element that has the ID attribute with the specified value.

   ```javascript
   // HTML: <div id="demo"></div>
   const element = document.getElementById("demo");
   element.textContent = "Hello, World!";
   ```

2. **`getElementsByClassName(className)`** - Returns a live HTMLCollection of all elements with the specified class name.

   ```javascript
   // HTML: <div class="test"></div><div class="test"></div>
   const elements = document.getElementsByClassName("test");
   Array.from(elements).forEach((el) => (el.textContent = "Updated"));
   ```

3. **`getElementsByTagName(tagName)`** - Returns a live HTMLCollection of elements with the given tag name.

   ```javascript
   // HTML: <p></p><p></p>
   const paragraphs = document.getElementsByTagName("p");
   Array.from(paragraphs).forEach((p) => (p.textContent = "Paragraph text"));
   ```

4. **`querySelector(selector)`** - Returns the first element that matches a specified CSS selector(s) in the document.

   ```javascript
   // HTML: <div class="example"></div>
   const element = document.querySelector(".example");
   element.style.color = "blue";
   ```

5. **`querySelectorAll(selector)`** - Returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

   ```javascript
   // HTML: <div class="example"></div><div class="example"></div>
   const elements = document.querySelectorAll(".example");
   elements.forEach((el) => (el.style.color = "red"));
   ```

6. **`createElement(tagName)`** - Creates a new element with the given tag name.

   ```javascript
   const newDiv = document.createElement("div");
   newDiv.textContent = "New Element";
   document.body.appendChild(newDiv);
   ```

7. **`createTextNode(text)`** - Creates a new text node with the given text.

   ```javascript
   const textNode = document.createTextNode("Hello text node");
   document.body.appendChild(textNode);
   ```

8. **`appendChild(node)`** - Adds a node to the end of the list of children of a specified parent node.

   ```javascript
   const newDiv = document.createElement("div");
   document.body.appendChild(newDiv);
   ```

9. **`removeChild(node)`** - Removes a child node from the DOM.

   ```javascript
   const parent = document.getElementById("parent");
   const child = document.getElementById("child");
   parent.removeChild(child);
   ```

10. **`replaceChild(newNode, oldNode)`** - Replaces one child node of the specified element with another.

    ```javascript
    const parent = document.getElementById("parent");
    const newChild = document.createElement("div");
    const oldChild = document.getElementById("oldChild");
    parent.replaceChild(newChild, oldChild);
    ```

11. **`addEventListener(type, listener)`** - Sets up a function that will be called whenever the specified event is delivered to the target.

    ```javascript
    const button = document.querySelector("button");
    button.addEventListener("click", () => alert("Button clicked!"));
    ```

12. **`removeEventListener(type, listener)`** - Removes an event listener from the element.

    ```javascript
    const button = document.querySelector("button");
    const handleClick = () => alert("Button clicked!");
    button.addEventListener("click", handleClick);
    button.removeEventListener("click", handleClick);
    ```

13. **`getAttribute(attributeName)`** - Gets the value of an attribute on the specified element.

    ```javascript
    // HTML: <div id="myDiv" data-custom="value"></div>
    const div = document.getElementById("myDiv");
    console.log(div.getAttribute("data-custom")); // 'value'
    ```

14. **`setAttribute(attributeName, value)`** - Sets the value of an attribute on the specified element.

    ```javascript
    const div = document.createElement("div");
    div.setAttribute("id", "newDiv");
    document.body.appendChild(div);
    ```

15. **`removeAttribute(attributeName)`** - Removes an attribute from the specified element.
    ```javascript
    const div = document.getElementById("myDiv");
    div.removeAttribute("id");
    ```

These methods provide a powerful interface for interacting with the web page, allowing you to dynamically change the document's content, structure, and style directly from JavaScript.

---

### Client side rendering (CSR)

Client-side rendering (CSR) refers to the process of rendering web pages directly in the browser using JavaScript. In CSR, the browser downloads a minimal HTML page, JavaScript files, and any necessary data, then uses JavaScript to generate the content and update the DOM dynamically.

### Methods for Client-Side Rendering with Vanilla JavaScript

When using vanilla JavaScript for client-side rendering, you can manipulate the DOM directly or use JavaScript to set innerHTML or use DOM manipulation methods like `createElement` and `appendChild`. Here's how you can add event listeners to dynamically rendered elements using different methods:

#### InnerHTML

Using `innerHTML` allows you to set the HTML content of an element as a string. This method is straightforward but can be less efficient for updating existing DOM elements and poses a risk for XSS attacks if not properly sanitized.

```javascript
document.getElementById(
  "app"
).innerHTML = `<button id="myButton">Click Me</button>`;

// Adding an Event Listener
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button Clicked!");
});
```

#### createElement and appendChild

`createElement` creates a new DOM element, and `appendChild` adds a child element to a parent node. This method is more performant for updating the DOM and safer regarding XSS vulnerabilities.

```javascript
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", function () {
  alert("Button Clicked!");
});
document.getElementById("app").appendChild(button);
```

#### insertAdjacentHTML

`insertAdjacentHTML` parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. This method can be a more efficient way to insert HTML compared to `innerHTML` because it does not reparse the element it is being used on and thus does not corrupt the existing elements inside that element.

```javascript
document
  .getElementById("app")
  .insertAdjacentHTML(
    "beforeend",
    `<button id="anotherButton">Click Me Too</button>`
  );

// Since the element is immediately added to the DOM, we can attach an event listener to it.
document.getElementById("anotherButton").addEventListener("click", function () {
  alert("Another Button Clicked!");
});
```

### Pros and Cons of Each Method

- **InnerHTML**

  - **Pros:** Simple and easy to use for setting HTML content.
  - **Cons:** Can lead to XSS vulnerabilities if not handled properly. Less efficient for updating large or dynamic parts of the DOM.

- **createElement and appendChild**

  - **Pros:** More secure against XSS attacks. More performant for dynamic updates to the DOM.
  - **Cons:** More verbose and complex code for constructing elements and adding content.

- **insertAdjacentHTML**
  - **Pros:** More efficient than `innerHTML` for inserting elements without disrupting existing elements. Good balance between simplicity and performance.
  - **Cons:** Like `innerHTML`, potential for XSS vulnerabilities if the inserted HTML is not properly sanitized.

### Conclusion

When rendering content on the client side and adding event listeners to dynamically rendered elements, it's important to choose the right method based on the specific needs of your application, considering both security and performance. `createElement` and `appendChild` are generally preferred for their performance benefits and security advantages, especially when creating interactive elements that require event listeners.
