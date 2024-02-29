import { getRandomID } from "./getRandomID";

export default function Counter({ parentSelector }) {
  let state = {
    count: 0,
    clickedAt: [],
    parentSelector,
    id: getRandomID(),
  };

  const pushHandler = {
    apply(target, thisArg, argumentsList) {
      console.log({ arguments });
      console.log(`called push with argument:', ${argumentsList}`);
      return Reflect.apply(target, thisArg, argumentsList);
    },
  };

  state.clickedAt.push = new Proxy(Array.prototype.push, pushHandler);

  const proxyHandler = {
    set(target, property, value) {
      switch (property) {
        case "count":
        case "clickedAt":
          target[property] = value;
          break;
        case "parentSelector":
          const currentParent = document.querySelector(target[property]);
          currentParent.remove();
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

  function render() {
    document.querySelector(state.parentSelector).innerHTML = `
          <div>
              <p>Count: ${state.count}</p>
              <button id="${state.id}">Increment</button>
          </div>
      `;

    document.getElementById(state.id).addEventListener("click", () => {
      state.count += 1;
      state.clickedAt.push(new Date());
    });
  }

  return {
    state,
    render,
  };
}
