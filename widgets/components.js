function Counter({ parentSelector }) {
  let state = {
    count: 0,
    clickedAt: [],
    parentSelector,
  };
  const proxyHandler = {
    set(target, property, value) {
      switch (property) {
        case "count":
          target[property] = value;
          break;
        case "clickedAt":
          target[property].push(value);
          break;
        case "parentSelector":
          const currentParent = document.querySelector(target[property]);
          currentParent.remove();
          target[property] = value;
          break;
      }
      render();
    },
    get(target, property) {
      return target[property];
    },
  };
  state = new Proxy(state, proxyHandler);

  function render() {
    document.querySelector(state.parentSelector).innerHTML = `
        <div>
            <p>Count: ${state.count}</p>
            <button id="incrementBtn">Increment</button>
        </div>
    `;
    document.getElementById("incrementBtn").addEventListener("click", () => {
      state.count += 1;
    });
  }

  return {
    state,
    render,
  };
}

function TodoBoard({ parentSelector }) {
  let state = {
    todos: [],
    parentSelector,
  };
  const proxyHandler = {
    set(target, property, value) {
      switch (property) {
        case "todos":
          target[property] = value;
          break;
        case "parentSelector":
          const currentParent = document.querySelector(target[property]);
          currentParent.remove();
          target[property] = value;
          break;
      }
      render();
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
    document.querySelector(state.parentSelector).innerHTML = `
            <div>
                ${ui}
                <input id="todoInput" type="text" />
                <button id="addTodoBtn">Add Todo</button>
            </div>
        `;
    document.querySelectorAll(".removeTodoBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        removeTodo(btn.parentElement.getAttribute("data-todo"));
      });
    });
    document.getElementById("addTodoBtn").addEventListener("click", () => {
      const todo = document.getElementById("todoInput").value;
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
