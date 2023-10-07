import React, { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { PropTypes } from "prop-types";

import "../../../styles/task.scss";
/**
 * Este componente lo que hara es mostrar un formulario que
 * al ejecutar un evento de `onSubmit` en el padre se agregue una nueva tarea en la lista.
 * @returns
 */
const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);
  console.log("Este es el nameRef: " + nameRef.current.value);
  function addTask(e) {
    e.preventDefault();
    console.log("este es el nameRef: " + nameRef.current);
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    color: "blue",
    fontWeight: "700",
  };
  const urgentStyle = {
    color: "yellow",
  };
  const blockingStyle = {
    color: "red",
  };
  return (
    <form onSubmit={addTask} className="mb-4 form-container">
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={nameRef}
          id="inputName"
          placeholder="Input name"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <input
          type="text"
          ref={descriptionRef}
          id="inputDescription"
          placeholder="Input description"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <select
          className="form-control form-control-lg"
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id="select-level"
        >
          <option style={normalStyle} value={LEVELS.NORMAL}>
            {LEVELS.NORMAL.toUpperCase()}
          </option>
          <option style={urgentStyle} value={LEVELS.URGENT}>
            {LEVELS.URGENT.toUpperCase()}
          </option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>
            {LEVELS.BLOCKING.toUpperCase()}
          </option>
        </select>
      </div>
      <button type="submit" className="btn btn-success ">
        {length > 0 ? "Add new task" : "Create your new task"}
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
export default TaskForm;
