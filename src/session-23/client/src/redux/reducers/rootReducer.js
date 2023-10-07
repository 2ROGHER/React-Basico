
import {combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { filteReducer } from './filterReducer';
import { userReducer } from './userReducer';

// Nota: los todosState, filterState, userREducer son estados globales de la aPP.
export const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        todosState: todosReducer,
        filterState:filteReducer,
        // ... add moere states and reducers to include them in the store.
        // ASYNC example (login user);
        userState: userReducer,
    }
)