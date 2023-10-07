/**
* Controlar cuando el componente va a desaparecer del DOM de la vista.

 */

import React, { Component } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log(
      "Comportamiento antes de que el componente desaparezca de la vista."
    );
  }
  render() {
    return <div><h1>*** componentWillUnmount() *** </h1></div>;
  }
}

import React from 'react';

const WillUnmountHook = () => {
    // la sentencia dentro de 'return' ejecuta todo aquello antes 
    // que el componente sea remomida de la vista.
    // Nota: se debe tener una sentencia de 'return' en cada componente y solo uno.
    useEffect(() => {
        effect
        return () => {
           console.log(
             "Comportamiento antes de que el componente desaparezca de la vista."
           );
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default WillUnmount;

