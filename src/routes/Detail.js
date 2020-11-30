import { connect } from "react-redux";
import React from "redux";

const Detail = ({ todo }) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Created at : {todo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, props) => {
  console.log(props);

  const {
    match: {
      params: { id },
    },
  } = props;

  return { todo: state.find((item) => item.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
