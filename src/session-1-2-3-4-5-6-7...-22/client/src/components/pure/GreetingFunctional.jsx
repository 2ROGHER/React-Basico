import React, { useState } from "react";
import PropTypes from "prop-types";

// se puede colocar:(props) => {} o aplicando el destructuring
const GreetingFunctional = ({ name }) => {
  const [state, setState] = useState({
    age: 23,
    count: 0,
  });


  const birthDay = () => {
    setState({ count: state.count = 23})
  };
  
  return (
    <div style={{ color: "#f38233", fontWeight: "500" }}>
      <h3 className="name">My nombre es: {name}</h3>
      <div className="greeting">
        Hola como estan todos por esta zona de los developers.
      </div>
      <div>Tengo {state.age} anios de edad</div>
      <button
        onClick={() => {
            setState({ count: state.count + 1 });
        }}
      >
        Increment
      </button>
      <label htmlFor="">{state.count}</label>
      <button
        onClick={() => {
            setState({ count: state.count - 1 });
        }}
      >
        Decrement
      </button>
    </div>
  );

  
};

GreetingFunctional.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GreetingFunctional;
