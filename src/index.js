//@ts-check
import { createStore } from "redux";
import "./index.css";

const addBtn = document.getElementById("ADD");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = 1;
const DELETE_TODO = 2;

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      /* never mutate state!! */
      // state.push(action.todo);

      return [...state, { todo: action.todo, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return [];
  }
};
const store = createStore(reducer);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, todo });
  console.log(store.getState());
});

store.subscribe(() => {
  ul.innerHTML = "";
  store.getState().forEach((item) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "DEL";

    delBtn.addEventListener("click", () => {
      store.dispatch({ type: DELETE_TODO, id: item.id });
    });

    li.id = item.id;
    li.innerText = item.todo;
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
});
