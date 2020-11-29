//@ts-check
import { createStore } from "redux";

const up = document.getElementById("up");
const down = document.getElementById("down");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case "up":
      count++;
      break;
    case "down":
      count--;
      break;
  }
  return count;
};
const countStore = createStore(countModifier);
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

up.addEventListener("click", () => countStore.dispatch({ type: "up" }));
down.addEventListener("click", () => countStore.dispatch({ type: "down" }));
