import React, { useContext, useReducer } from "react";

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


const myContext = React.createContext(null);

const Points = () => {
    const state = useContext(myContext);

    return (
      <div>
  
        <h1>Este es el estado global que se le pasa por contexto:</h1>
        <div>Points: {state.count}</div>
      </div>
    );
}
const Counter = () => {
  //Initial state for Reducer
  const initialState = {
    count: 0,
  };

  // Reducer to change state
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + action.payload.quantity,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - action.payload.quantity,
        };
      case RESET:
        return {
          ...state,
          count: 0,
        };

      default:
        return state;
    }
  };

  // asign useREducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={state}>
      <div>
        <h1>Points: {state.count}</h1>
        <button
          onClick={() =>
            dispatch({ type: INCREMENT, payload: { quantity: 1 } })
          }
        >
          INCREMENT
        </button>
        <button
          onClick={() =>
            dispatch({ type: DECREMENT, payload: { quantity: 1 } })
          }
        >
          DECREMENT
        </button>
        <button onClick={() => dispatch({ type: RESET })}>RESET COUNTER</button>

        {""}
        {/* Con esto lo que hacemos es pasar todos esos datos que estan en el padre atraves de este 
        contexto a los componentes inferiores */}
        <Points />
      </div>
    </myContext.Provider>
  );
};

export default Counter;
