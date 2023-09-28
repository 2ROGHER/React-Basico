import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    // estado de la aplicacion.
    this.state = {
      age: 24,
      count: 0,
    };
  }

  render() {
    return (
      <div style={{ color: "#f38233", fontWeight: "500" }}>
        <h3 className="name">My nombre es: {this.props.name}</h3>
        <div className="greeting">
          Hola como estan todos por esta zona de los developers.
        </div>
        <div>Tengo {this.state.age} anios de edad</div>
        <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1,
            })
          }}
        >
          Increment
        </button>
        <label htmlFor="">{this.state.count}</label>
        <button
            onClick={() => {
                this.setState((prevState, nextState) => ({
                    count: prevState.count - 1,
                }))
            }}
         >
          Decrement
        </button>
      </div>
    );
  }

  // metodo functinal
  birthDay = () => {
    this.setState((prevState) =>({
        age: prevState.age + 5
    }))
  
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
