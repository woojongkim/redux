//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreator } from "../store";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addTodo(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="todo" onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((item) => (
          <Todo key={item.id} {...item}></Todo>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state, props) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTodo: (text) => dispatch(actionCreator.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
