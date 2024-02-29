import { getRandomID } from "./getRandomID";

export default function TodoBoard({ parentSelector }) {
  let state = {
    todos: [],
    parentSelector,
    id: getRandomID(),
  };

  const proxyHandler = {
    set(target, property, value) {
      switch (property) {
        case "parentSelector":
          const currentParent = document.querySelector(target[property]);
          currentParent.remove();
          target[property] = value;
          break;
        default:
          target[property] = value;
          break;
      }
      render();
      return true;
    },
    get(target, property) {
      return target[property];
    },
  };

  state = new Proxy(state, proxyHandler);

  function addTodo(todo) {
    state.todos = [...state.todos, todo];
  }

  function removeTodo(todo) {
    state.todos = state.todos.filter((existingTodo) => existingTodo !== todo);
  }

  function render() {
    const container = document.querySelector(state.parentSelector);

    const ui = state.todos.length
      ? `
          <ul>
              ${state.todos
                .map(
                  (todo) => `<li data-todo="${todo}">
                  <span>${todo}</span>
                  <button class="removeTodoBtn">Remove</button>
              </li>`
                )
                .join("")}
          </ul>
      `
      : "<div>No todos yet</div>";

    container.innerHTML = `
              <div>
                  ${ui}
                  <input id="todoInput" type="text" />
                  <button id="addTodoBtn">Add Todo</button>
              </div>
          `;

    container.querySelectorAll(".removeTodoBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        removeTodo(btn.container.getAttribute("data-todo"));
      });
    });

    container.querySelector("#addTodoBtn").addEventListener("click", () => {
      const todo = container.querySelector("#todoInput").value;
      addTodo(todo);
    });
  }

  return {
    state,
    render,
    addTodo,
    removeTodo,
  };
}
