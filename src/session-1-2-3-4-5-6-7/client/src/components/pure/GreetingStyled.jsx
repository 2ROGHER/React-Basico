import React, {useState} from "react";
import Form from "./forms/Form";
/**
 * Vamos  a definir estilos a trabes de objetos constantes.
 * Los cuales seran utiles para definir estilos personzalidos

 * @returns 
 */

// Estilos para el user logeado
const loggedStyle = {
  color: "#4574d1",
};

// Estilos para el usuario no logeado.
const unloggedStyle = {
  color: "tomato",
};

const GreetingStyled = (props) => {
  /**
   * Controlar si el estado esta logeado o no.
   */

  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {
        logged ? (<h2>Hola, {props.name} </h2>) : <h2>Please log in first</h2>
      }
      <button
        onClick={() => {
          console.log("Button pulsado");
          setLogged(!logged);
        }}
      >
        {
            logged ? <Form></Form> : null
        }
        {logged ? "Log-out" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
