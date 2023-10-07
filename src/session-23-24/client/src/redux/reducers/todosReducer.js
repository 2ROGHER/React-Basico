//marca una tarea inicial o una terea vacia

import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

let initialState = [];

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    txt: action.payload.txt,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:
            return state.map((t) =>
                (t.id === action.id) ?
                    {
                        ...state,
                        completed: !t.completed

                    }
                    : t
            );

        default:
            return state;

    }
};