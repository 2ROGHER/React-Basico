import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";

const TaskList = () => {
  var tasks = [
    new Task("Task 1", "New Task 1", false, LEVELS.NORMAL),
    new Task("Task 2", "New Task 2", true, LEVELS.URGENT),
    new Task("Task 3", "New Task 3", false, LEVELS.BLOCKING),
  ];

  let changeState = (id) => {
    console.log("Hola mi amor te amo");
  };

  
  return (
    <div>
      <h1>Your tasks</h1>
      {tasks.map((t, i) => {
        return <TaskComponent task={t} />;
      })}
    </div>
  );
};

TaskList.propTypes = {};

export default TaskList;
