import { createStore } from "redux";

const ADD = 1;
const DELETE = 2;

const addTodo = (text) => {
  return { type: ADD, text };
};

const deleteTodo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return updateLocalStorage([...state, { text: action.text, id: Date.now() }]);
    case DELETE:
      return updateLocalStorage(state.filter((item) => item.id !== action.id));
    default:
      return state;
  }
};

const updateLocalStorage = (state) => {
  console.log("set");
  localStorage.setItem("toDos", state);
  return state;
};
const getStateLocalStorage = () => {
  const toDos = localStorage.getItem("toDos");
  console.log("get :", toDos);
  if (toDos == undefined) return [];
  else return toDos;
};

export const actionCreator = {
  addTodo,
  deleteTodo,
};

export const store = createStore(reducer);
