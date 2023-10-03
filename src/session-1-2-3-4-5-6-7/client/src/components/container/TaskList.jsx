import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";

const TaskList = () => {
  var tasksList = [
    new Task("Task 1", "New Task 1", false, LEVELS.NORMAL),
    new Task("Task 2", "New Task 2", true, LEVELS.URGENT),
    new Task("Task 3", "New Task 3", false, LEVELS.BLOCKING),
  ];

  const [tasks, setTasks] = useState([...tasksList]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task List has been modified...");
    setLoading(false);

    return () => {
      console.log("TaskList component is goint to unmount...");
    };
  }, [tasks]);

  let changeCompleted = (id) => {
    console.log("Hola mi amor te amo");
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header p-3">
          <h1>Your tasks</h1>
        </div>
        <div
          className="card-body"
          data-mb-perfect-scrollbar="true"
          style={{ position: "relative", height: "500px" }}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {tasks.map((t, i) => {
                return <TaskComponent key={i} task={t} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

TaskList.propTypes = {};

export default TaskList;
