/**
* Ejemplo para enteder los props.children
* Esto es importante para comunicar datos direcionales o unidireccionales de los
* compnentes en react.js

 */

 import React from 'react';
 
 const Ejemplo3 = (props) => {

    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS</h1>
            <h2>Nombre: {props.nombre}</h2>
            {/* props.children pintara por defecto aquellos que se encuentre entre las etiques
            de apertura y cierre desd eel componente de orden superior */}
            {props.children}
        </div>
    );
 }
 
 export default Ejemplo3;
 