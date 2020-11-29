//@ts-check
import React, { useState } from "react";
import { store, addTodo, deleteTodo } from "../store";

function Home() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    store.dispatch({ type: 1, todo: text });
    console.log(store.getState());
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="todo" onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
