import React, { useState } from "react";

const UseState = () => {
  const initialValue = 0;

  const initialPeople = {
    name: "John Doe",
    email: "john@doe.com",
  };

  /**
   * Queremos que el VALOR INICILA Y PERSONAINICILA sean
   * parte del estsdao del componete para asi poder gestionar su cambio
   * y que  este se vea reflejedao en la vista del componente.
   */

  const [contador, setContador] = useState(initialValue);
  const [persona, setPersona] = useState(initialPeople);

  /**
   * Funcion para actualizar el estado privado qeu contiene el contador
   */
  let incrementarContador = () => {
    setContador(contador + 1);
  };

  /**
   * Funcion para actualizar el estado del componente el cual es "persona".
   * @param {*} name
   */
  function actualizarPersona() {
    setPersona({
      name: "Roger",
      email: "roger@gmail.com",
    });
  }
  return (
    <div>
    <h1>*** Ejemplo de useState *** </h1>
      <h2>nombre {persona.name}</h2>
      <h2>email: {persona.email}</h2>
      <button onClick={incrementarContador}>Aumentar</button>
      <label htmlFor="">{contador}</label>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
};

export default UseState;
