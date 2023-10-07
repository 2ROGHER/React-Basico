import React from 'react'
import { connect } from 'react-redux'
import TodoForm from '../pure/forms/TodoForm'
import { addTodo } from '../../redux/actions/actions'



const mapStateToProps = (state) => {
    //this is not necessary to use.
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        submit: (txt) => {
            dispatch(addTodo(txt));
        }
    }
}


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoFormContainer;