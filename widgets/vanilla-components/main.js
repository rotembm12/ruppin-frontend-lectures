import Counter from "./counter";
import TodoBoard from "./todos";
const counters = [];
const todoBoards = [];

const todoWrapper = document.getElementById("todos");
const counterWrapper = document.getElementById("counter");

document.getElementById("add-todos").addEventListener("click", () => {
  const todosContainer = document.createElement("div");
  const randomID = Math.random().toString(36).substring(7);
  todosContainer.dataset.containerid = randomID;

  todoWrapper.appendChild(todosContainer);

  const newTodoBoard = TodoBoard({
    parentSelector: `[data-containerid="${randomID}"]`,
  });

  newTodoBoard.render();
  todoBoards.push(newTodoBoard);
});
document.getElementById("add-counter").addEventListener("click", () => {
  const counterContainer = document.createElement("div");
  const randomID = Math.random().toString(36).substring(7);
  counterContainer.dataset.containerid = randomID;

  counterWrapper.appendChild(counterContainer);
  const newCounter = Counter({
    parentSelector: `[data-containerid="${randomID}"]`,
  });
  newCounter.render();
  counters.push(newCounter);
});
