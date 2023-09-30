import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
    console.log(task);
  return (
    <div>
      <h2> Nombre: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h3>Level: {task.level}</h3>
      <h3>This task: {task.completed ? "COMPLETED" : "PENDING"}</h3>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
