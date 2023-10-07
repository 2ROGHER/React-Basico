// Es un componente funcional normal
import React from "react";
import { connect } from "react-redux";
import TodoList from "../pure/TodoList";
// Actions
import { toggleTodo } from "../../redux/actions/actions";
// export const TodoContainer = (props) => {
// //   return <div>TodoContainer</div>;
// };
// filter Todo List
const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};
// Esta es la forma en que se debe realizar un correcto `containe`
// lo que hacemos es conectar el estado y despachar el TodoList a las prosp.
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;