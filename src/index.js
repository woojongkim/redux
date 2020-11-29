import { createStore } from "redux";

const up = document.getElementById("up");
const down = document.getElementById("down");
const number = document.querySelector("span");

const Counter = {
  ADD: 1,
  DOWN: 2,
};

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case Counter.ADD:
      return count + 1;
    case Counter.DOWN:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

up.addEventListener("click", () => countStore.dispatch({ type: Counter.ADD }));
down.addEventListener("click", () => countStore.dispatch({ type: Counter.ADD }));
