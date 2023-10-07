import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";
import TaskForm from "../pure/forms/TaskForm";

const TaskList = () => {
  var tasksList = [
    new Task("Task 1", "New Task 1", false, LEVELS.NORMAL),
    new Task("Task 2", "New Task 2", true, LEVELS.URGENT),
    new Task("Task 3", "New Task 3", false, LEVELS.BLOCKING),
  ];

  const [tasks, setTasks] = useState([...tasksList]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log("Task List has been modified...");
    setTimeout(() => {
       setLoading(false);
    }, 3000);

    return () => {
      console.log("TaskList component is goint to unmount...");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("Completed task: " + task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // We update the state of the component and it will update the
    // iteration of the tasks in order to show the task updated.
    // al actualizar el estado del componente se actualiza la iteracion y se actualiza la vista.
    setTasks(tempTask);
  }

  function deleteTask(task) {
    console.log("Completed task: " + task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    // seteamos el valor del estado para actualizar la vista
    setTasks(tempTask);
  }

  // funcion para agregar una tarea
  function add(task) {
    console.log("Completed task: " + task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
    setShowForm(!showForm);
  }

  function addForm() {
    if(showForm) return <TaskForm add={add} length={tasks.length}/>
    else return  <button onClick={() => {
      addForm();
      setShowForm(!showForm);
    }} className="btn-add-form">Add </button>
  }

  function taskTable() {
     return (
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
           return (
             <TaskComponent
               key={i}
               task={t}
               complete={completedTask}
               remove={deleteTask}
             />
           );
         })}
       </tbody>
     </table>
     );
  }

  
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
          {tasks.length > 0 ? (
            <div>{loading ? <p>Loading tasks...</p> : taskTable()}</div>
          ) : (
            <div>
              <h3>There are no any tasks to show </h3>
              <h4>Please, create one</h4>
            </div>
          )}
        </div>
      </div>
      {addForm()}
    </div>
  );
};

TaskList.propTypes = {};

export default TaskList;
