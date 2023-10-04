import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
// importamos la hoja de estilo SCSS
import "../../styles/task.scss";

import toggleOn from '../../assets/svg/toggle-on.svg';
import toggleOff from '../../assets/svg/toggle-off.svg';
import trash from '../../assets/svg/trash.svg';
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {

  useEffect(() => {
    console.log("Task created");
    return () => {
      console.log(`Task ${task.name} in going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary text-bg-primary">
              {task.level}
            </span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning text-bg-primary">
              {task.level}
            </span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger text-bg-primary">
              {task.level}
            </span>
          </h6>
        );
      default:
        return (
          <h6 className="mb-0">
            <span className="badge bg-success">{task.leve}</span>
          </h6>
        );
    }
  }
   return (
     <tr
       className={
         task.completed
           ? " fw-normal task-completed"
           : " fw-normal task-pending"
       }
     >
       <th>
         <span className="ms-2 task-name">{task.name}</span>
       </th>
       <td className="align-middle">
         <span>{task.description}</span>
       </td>
       <td className="align-middle">
         {/* //TODO: sustituir badge */}
         {taskLevelBadge()}
         {/* <span>{task.level}</span> */}
       </td>
       <td className="align-middle">
         {/* //TODO: sustituir por iconos */}
         {task.completed ? (
           <img
             onClick={() => {
               complete(task);
             }}
             src={toggleOn}
             alt="toggle-on"
             className="task-action"
           />
         ) : (
           <img
             onClick={() => {
               complete(task);
             }}
             src={toggleOff}
             alt="toggle-off"
             className="task-action"
           />
         )}
         {/* <span>{task.completed ? "Completed" : "Pending"}</span> */}
         <img
           onClick={() => remove(task)}
           src={trash}
           alt=""
           style={{ cursor: "pointer" }}
         />
       </td>
     </tr>
   );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;

{
  /* <div>
  <h2 className="task-name"> Nombre: {task.name}</h2>
  <h3>Description: {task.description}</h3>
  <h3>Level: {task.level}</h3>
  <h3>This task: {task.completed ? "COMPLETED" : "PENDING"}</h3>
</div>; */
}
