// increment ID for TODOs
let nextTodoId = 0;
/**
 * 
 * @param {string} txt 
 * @returns action TODO
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const addTodo = (txt) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId + 1,
            txt: txt,
        }
    }
};

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id,
        }
    }
};

/**
 * 
 * @param {string} filter 
 * @returns set_visibility_filter
 */
export const setVisibilyFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter,
        }
    }   
}