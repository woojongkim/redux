import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";

const Todo = ({ text, id, deleteTodo }) => {
  const onClick = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onClick}>DEL</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteTodo: (id) => dispatch(actionCreator.deleteTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
