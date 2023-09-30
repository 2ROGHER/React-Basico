/**
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useRef, useState } from "react";

const Ejemplo2 = () => {
  // sintaxis

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(2);

  /**
   * Creamos una referencia con useRef() para asociar
   * una `variable` con un elemento del  DOM del componente (vista HTML).
   */

  const ref = useRef();

  /**
   * Caso 1:
   */
  //   useEffect(() => {
  //     console.log(" CAMBIO EN EL ESTADO DEL COMPONETE: OJO `ESTAO`");
  //     console.log("Mostrando Referencia a elemento del DOM");
  //     console.log(ref); // esto contine una referencia aun elemento del DOM(HTML)
  //   });

  /**
   * caso 2:
   * Ejecutar el useEffect() solo cuando cambie algun `estado`
   * : ojo estado, ojo solo y solo si cuando haya cambios en un estado determinado
   *
   */

  useEffect(() => {
    console.log(
      " CAMBIO EN EL ESTADO DEL COMPONETE: OJO `ESTAdo` estado: contador1"
    );
    console.log("CONTROLANDO CAMBIOS QUE SOLO  HAY EN EL ESTADO CONTADOR1");
    console.log("Mostrando Referencia a elemento del DOM");
    console.log(ref); // esto contine una referencia aun elemento del DOM(HTML)
  }, [contador1]);

  /**
   * caso 3:
   * Ejecutar el useEffect() solo cuando cambie algun `estado` el contado1 o bien el contador2
   * : ojo estado, ojo solo y solo si cuando haya cambios en un estado determinado
   *
   */

  useEffect(() => {
    console.log(
      " CAMBIO EN EL ESTADO DEL COMPONETE: OJO `ESTAdo` estado: contador1"
    );
    console.log("CONTROLANDO CAMBIOS QUE SOLO  HAY EN EL ESTADO CONTADOR1   O EN EL CONTADOR2");
    console.log("Mostrando Referencia a elemento del DOM");
    console.log(ref); // esto contine una referencia aun elemento del DOM(HTML)
  }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplos : useState(), useRef(), useEffect() ***</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado va a ser el <h4> */}
      <h3 ref={ref}>Ejemplo de elemento referenciado</h3>
      <button onClick={() => setContador1(contador1 + 1)}>Incrementar</button>
      <button onClick={() => setContador1(contador1 - 1)}>Decrementar</button>
      <button>Mostrar ref</button>
    </div>
  );
};

export default Ejemplo2;
