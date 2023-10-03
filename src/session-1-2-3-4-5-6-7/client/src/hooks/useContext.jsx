/**
    * Uso de Hook useContext()
    * 
 */

import React, { useContext } from 'react';
/**
 *  useContext
 * Dispone de un contexto que va  a tener un valor
 * que recibe desde el padre
 * @returns 
 */

// Definmoel contexto del componente
const miContexto = React.createContext(null);

const Componente1 = () => {
    // Inicializamos un estado vacio que va a rellenarse con los datos
    // del contexto del padre.
    // LA IDE A ES TRASNMIRIT EVENTOS A TRAVES DE COMPONENTE SIN PROPS SINO CNO EL USO DE CONTEXTO'

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

import React from 'react';
/**
 * 
 * @returns Este es mi conmponete el cual contiene el contexto
 * y el que se va a exportar por defecto
 * Va a contner un state inicial como el estado comparitod con todos los componentees

 */
const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "123425235",
        sesion: 1
    }
    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);
    /**
     * La idea de esta sesin es que pueda obtenerlos cualquiera componete que este 
     * por debajo de este componente padre.
     */
    function actualizarSesion() {
        setSessionData({
            token: "jwt2342523",
            sesion: sessionData.sesion + 1
        })
    }
    return (
      // ahora lo que hacemos es proporcioanar un contexto a todos los componentes
      // que estan por debajo de este componente padre.
      <miContexto.Provider value={sessionData}>
        {/* Todo lo que este aqui dentro puede leeer lo dato de sessionData.
        Ademas si se actualiza , los componete de aqui tambien lo actualizan. */}
        <Componente1/>
        <button onClick={actualizarSesion}>Actualizar Session</button>
      </miContexto.Provider>
    );
}



export default MiComponenteConContexto;
