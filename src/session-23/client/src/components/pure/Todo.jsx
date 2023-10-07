import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, id }) => {
  console.log(id, text);
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
        textDecorationColor: completed ? "#23ffdd" : "none",
        color: completed ? "green" : "#fff",
      }}
    >
      {id} - {text}
    </li>
  );
};

Todo.propType = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}
export default Todo;
