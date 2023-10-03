/**
* Ejemplo de uso del componentDidUpdate() en componnete de clase
* uso hook en el componete funcional

 */

import React, { Component } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibie props o cambio en su estado privado "
    );
  }
  render() {
    return <div><h1>*** componentDidUpdate()</h1></div>;
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        // Nota: implementarlo sin corchetes para que se ejecute todas la veces.
            console.log(
              "Comportamiento cuando el componente recibie props o cambio en su estado privado "
            );

    });
  return <div></div>;
};
