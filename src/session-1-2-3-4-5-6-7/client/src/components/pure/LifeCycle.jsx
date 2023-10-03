/**
* Componente que dispone delos metodos del ciclo de vida del  componente
* 
 */

import React, { Component } from 'react';

class LifeCycle extends Component {

    
    constructor(props){
        super(props);
        console.log("Instancing the class");
    }

    componentWillMount() {
        // WILLMOUNT:  Antes de que se monnte el componente.
    }
    componentDidMount() {
        // DIDMOUNT: Justo acabar el montaje del componente 
        // pero antes de pintarlo o `renderizarlo` en la vista

    }

    componentWillReceiveProps() {
        // WILLRECIBEPROPS: Cuando vaya a recibir `props`. por part del padre
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
        * Controla si el componente debe o no actualizarse.
        * Se escoje o no actualizar la vista en determinados casos
        * Si el valor no ha cambiado se escoje actualizar o no la vista en determinado casos
         */
        return false;
    }
    componentWillUpdate(nextProps, nextState) {
        // WILLUPDATE: Justo antes de actualizarse, cuando se ha actualizado

    }   

    componentDidUpdate(nextProps, nextProps) {
        // DIDUPDATE: Justo despues de actualizarse en la vista del html.
    }
    componentWillUnmount() { 
        // WILLUNMOUNT: Justo antes de desaparecer en la `vista` del `html`.

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycle;
