import React, { useRef } from "react";

const Child = ({ name, func, update }) => {

  const messageRef = useRef('');
  const nameRef = useRef('');
  
  const pressButton = () => {
    // Uso de ref
    const text = messageRef.current.value;
    alert("Pressing a ", text);
  };

  const pressButtonParams = (text) => {
    console.log(`Text: ${text} and the name is ${name}`);
  };


    const submitForm = (e) => {
        // prevenimos que el form recargue la pagina por defecto
        e.preventDafault();
        update(nameRef.current.value);
    }
  return (
    <div style={{background:'#fff1fe'}}>
      <h3>Child component</h3>
      <div>
        <button onClick={() => console.log("Boton pulsado 1")}>Button 1</button>
        <button onClick={pressButton}>Button 2</button>
        <button
          onClick={() => {
            pressButtonParams("Fiorela");
          }}
        >
          Button 3
        </button>
        <input
          type="text"      
          placeholder="Insert any text"
          onFocus={() => console.log("Focussing in the element")}
          onChange={(e) => console.log(`Input change`, e.target.value)}
          onBlur={() => console.log("on Bluring")}
          onCopy={() => console.log("Inserted text copied")}
          ref={messageRef}
        />
        <button onClick={() => func(messasageRef.current.value)}>Send Message</button>
        <div onMouseOver={() => console.log("You are in the field")}></div>

        {/*Formulario */}

        <div style={{marginTop: "20px", background: '#b0eaf1'}}>
            <form onSubmit={submitForm}>
                <input ref={nameRef} type="text" name="" id="" placeholder="new-name"/>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Child;
