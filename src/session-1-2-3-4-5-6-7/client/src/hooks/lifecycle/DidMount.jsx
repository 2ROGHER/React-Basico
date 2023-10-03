/**
* Ejemplo del metodo
* del ciclo de vida en componente clase y el hook de ciclo de vida
* en componente funcional.

 */

import React, { Component } from 'react';

// Para componente de clase.
export class DidMount extends Component {

    componentDidMount() {
        // todo el proceso `asyncrono` previo debe ir aqui, nota importante.
        console.log("Comportamiento antes de que el componente sea aniadido al DOM(renderice)");

    }
    render() {
        return (
            <div>
                <h1>*** componentDidMount() ***</h1>
            </div>
        );
    }
}

// Para componente funcional

export const DidMount = () => {

    useEffect(() => {
        // con la lista vacia le decimos que cada vez que se pase por este componete se ejcuta el codigo
                console.log(
                  "Comportamiento antes de que el componente sea aniadido al DOM(renderice)"
                );
    });
    return (
        <div>
            
        </div>
    );
}

