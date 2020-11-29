import { createStore } from "redux";

const ADD = 1;
const DELETE = 2;

export const addTodo = (todo) => {
  return { type: ADD, todo };
};

export const deleteTodo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { todo: action.todo, id: Date.now() }];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export const store = createStore(reducer);
