import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
// Este es el encargaod de crear las taeas
// y tendra un container para ojo: despachar las acciones.

const TodoForm = ({ submit }) => {
  const newText = useRef();

  return (
    <div>
      <h2>Create your TODO</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(newText.currentValue); // Esta es una alternativa para usar el evento `onChange`.
        }}
      >
        <input
          type="text"
          name="todo"
          ref={newText}
          placeholder="Insert TODO"
        />
        <button type="submit">create todo</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired,
};
export default TodoForm;
