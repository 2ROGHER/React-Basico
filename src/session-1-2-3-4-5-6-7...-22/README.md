# 1. Que es SPA
* Una `SPA(Sigle Page Aplication)` es una forma de desarrollo web en el que la pagina web esta contenida en un solo documento HTML.
* Mientras se navegan en el navegador se  cargan los archivos solicitados por el servidor.
* De esta manera se mejora el rendimiento(performance) tiempos de respuesta y mejora la experiencia de usuario
* Se realiazan la gestion de rutas para la navegacion en el "navegador".
* La gestiones de `rutas` se parecen mucho a `Angular` u otro poryecto de SPA.
* 
# 2. Que es React.js
* **Def**: Esta es una `Libreria` de `Js` para crear `interfaces de usuario`.
* Es una solucino muy ligera que se puedenaplicar a una pagina web.
* Utiliza como lenguaje nativo `Javascript`.

* En conclusion es una `libreria` de js que nos permite crear aplicaciones `SPA` de manera facil y rapida flexible y de muy alto escalabilidad.
* Fue creada por `Meta` en 2013, el cula lo mantine actualmente.
* Es de codigo abierto, lo que implica que existen muchas comunidades que aportan informacion ayuda a esta libreria.
1. Ventajas: 
* `Velocidad`: Tiene un motor de renderizado potente en el desarrollo.
    * DOM Virtual: Esta es la base de la velocidad de React.js, este es un sistema de actualizacion potente y rapido que nos ofrece el renderizado especialmente rapido.
* `Componentes`: Las  filosofia de React.js esta basado en componentes web, los cuales nos permiten reutilizar el codigo.
    * Son componentes mucho mas pequenios y mas especificos que se pueden anidar
    * Cada componete devuelve un unico elemento  `html`.
    * Pueden ser reutilizables y pueden contener a otros componentes.
    * Los componentes pueden ser convertidos en componentes mas especificos(pequenios)
    * Se aplica el concepto de `modularizacion` a este enfoque
    * Existe componententes sin `estado` o `staless-puros` que solo se encargan de realizar un solo tipo de accion.
    * Componentes `containers`, estos son los encargados de realiar la logica de del componente en si.
    * Se pueden realiza la comunicacion de  componentes mediante las `props`.
    * 
* `Desarrallo Declarativo`: Se realizan mediante funciones `puras`.
    * Es de paragidma de programacion `declarativo`
    * Es decir cada componete nos va a devolver un componente nuevo.
    * Trabaja sobre las variaable globales en las que se realizan la actualizacion en aquellos estados  que son modificados o actualizados.
    * 
* `Anidacion de Componentes`: Se pueden realizar la anidacion de componentes en esta libreria. Donde se pueden simplificar enormente hasta llegar a la definicion del componente.
    * Se pueden realizar la anidacion de componentes en orden superios y orden inferior
    * Los `eventos` se comunican de `abajo` hacia `arriba`.
    * Las `props`/datos se comunican de `arriba` hacia `abajo` o de orden 
    superior a orden inferior.
    * La comunicacion entre los componentes es  `unidireccional`.
    * Los componentes estan escritos en `jsx`.
* `Isomorfismo`:
    * Es tambine conocido como `Javascript Univesal`, capacidad con la que podemos renderizar tanto en `servido-api` o en  `cliente`
    * Esto puede mejorar el `SEO` y el posicionamiento de la aplicacion.

* `Agilidad de Desarrollo`: Se puede usar la herramienta `create-react-app`.
    * React.js disponde de todas las librerias que se encuentran en `JQuery`
    * Estos dos tecnologias pueden convivir pero no es necesario usar este ultimo en nuestros proyectos
### Aplicaciones moviles con React
1. `Ionic`
2. `React Native`.

## 1. Pasos de la instalacion de REACT.js
### 1.1 Perfil de Desarrollo `Dev`
1. Se va a realizar la instalacino Node.js como en todos los paquetes para desarollo con Node.jsj
2. Se usa el script `npx create-react-app`, el cual nos permite crear una plantilla ya hecha con tood lo necesario para arrancar rapidamente con `React.js`. 

3. Ejecuta comando para instalar "`npm i --save -g create-react-app`" herramienta a nivel global en el proyecto.
4. Se puede usar `npx`, el cual es com un `CDN` que nos permite emplear los paquetes de React pero no de manera `global`.
5. Ejecutar el comando `npm start` para empezar la aplicacion de react.js
    - Esto nos permite ejecutar la aplicacion en el puerto 3000, que `despliega` un build de desarrollo y inicia en nuestro serviodor local ho `localhost`.
    - Se puede usar el comando `npm run build` pare desplegar el `build de produccion` el cual sera cargado en cualquier servidor de la nube.

### Usos: 
* react: libreria de react ensi
* react-dom: herramienta para el renderiado del DOM html
* react-scripts: herramienta para crear scripts para automatizar el proceso de creacion de la aplicacion.
* Link del npm: https://www.npmjs.org/


## 2. Componentes
* Los componentes son reutilizables y se pueden contener otros componentes anidados
* `Componente Puros`: Son componentes sencillos y que no cuenten con mucha logica o complejidad, para ello se usan las `props` que son datos que se pasan de `padres` a `hijos`.
### 2.1 Componentes de Clase
* Son componentes que extienden del Objecto `Component` de react
* Cuentan con un metodo render()
* Esto es una forma de embeder codigo `html` dentro de `js`. Donde le el codigo es `jsx` finalmente.
* Estos tipos de componentes tienen sus propios constructores tal como es la OOP
* `Las props` son datos que se le pasen de padres a hijos para indicarle que es lo que se va a `renderizar` o pintar
    * Pueden ser de cualquier tipo de dato, ya se funciones, string, objtos, etc.
* `Las Component.propTypes={}`: nos van a permitir especificar que tipo de datos son las `prop` que se  esta pasando, asi como realizar ciertas validaciones y contrains para las props.
* Este componete es como se trabajaba tradicionalmente con React.js antiguamente
* Tiene funciones y propiedades privadas.

* Un cambio en el estado del componete, `implica` un nuevo renderizado del componente en el DOM virtual o en la `vista en este caso` (ojo: El cambio en el estado genera un nuevo renderizado del componente)`.
```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    // estado de la aplicacion.
    this.state = {
      age: 24,
      count: 0,
    };
  }

  render() {
    return (
      <div style={{ color: "#f38233", fontWeight: "500" }}>
        <h3 className="name">My nombre es: {this.props.name}</h3>
        <div className="greeting">
          Hola como estan todos por esta zona de los developers.
        </div>
        <div>Tengo {this.state.age} anios de edad</div>
        <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1,
            })
          }}
        >
          Increment
        </button>
        <label htmlFor="">{this.state.count}</label>
        <button
            onClick={() => {
                this.setState((prevState, nextState) => ({
                    count: prevState.count - 1,
                }))
            }}
         >
          Decrement
        </button>
      </div>
    );
  }

  // metodo functinal
  birthDay = () => {
    this.setState((prevState) =>({
        age: prevState.age + 5
    }))
  
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;

```

## 2.2 Componentes tipo Contendor
* Estos  son lso componentes que tienen la logica
* Estos son componentes de `orden superior`; es decir que estos componente pueden renderizar otros componentes.
* `Estos se encargan de la logica en si`.
## 2.3 Componentes puros
* Estos son lso componentes los cuales solo tienen la funcion de renderizar los elementos `html`, no se ocupan de la logica de aplicaion en si, solo de renederizarlos.
* Los componentes de este tipo van a recibir los datos en forma de `props` los cuales van a ser pintados
* `Props`: PUeden ser datos primitivos o datos complejos(Listas, clases etc.)
## 2.4 Hooks
## 2.5 Routes
## 2.6 Pages(views)
* Estos contienen las vistas  que se van a renderizar en el DOM o que el usuario final los va a aprciar.
  * `auth`: Login, procesos de autenticacion, logeo etc
  * `home`
  * `404`
  * Estas son carpetas que se van a renderizar como la vista de la aplciacion.

## 2.7 Models
* Estos son los modelos de la aplicacion `clases, objetos`.


## Embede JS en HTML
## Renderizados codicionales
## Nota importante: 

`Cuando se realiza un cambio en le estado de la apiccion se realiza un "rerenderizado" de este componente; es decir de esta manera se puede apreciar la **reactividad** en accion`.

### 2.8 Componentes Funcionales
* Un componente funcinal es una functin de `orden superior` o de `orden superior`, que en cualquier momento pueden devolver elementos `htmls`.
* En este caso es una funcion, ya no se implementa una clase.
* Facil de crear componentes funcionales y extremadamente facil de usarlos en los componetes.
* Es una funcion que es facil de embeder sin la necesida de crear clases 
```jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

// se puede colocar:(props) => {} o aplicando el destructuring
const GreetingFunctional = ({ name }) => {
  const [state, setState] = useState({
    age: 23,
    count: 0,
  });


  const birthDay = () => {
    setState({ count: state.count = 23})
  };
  
  return (
    <div style={{ color: "#f38233", fontWeight: "500" }}>
      <h3 className="name">My nombre es: {name}</h3>
      <div className="greeting">
        Hola como estan todos por esta zona de los developers.
      </div>
      <div>Tengo {state.age} anios de edad</div>
      <button
        onClick={() => {
            setState({ count: state.count + 1 });
        }}
      >
        Increment
      </button>
      <label htmlFor="">{state.count}</label>
      <button
        onClick={() => {
            setState({ count: state.count - 1 });
        }}
      >
        Decrement
      </button>
    </div>
  );

  
};

GreetingFunctional.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GreetingFunctional;

```

### 2.9 Componentes Stateless
* Estos componentes `no tinen estado` en su implementación.


# 3. Hooks en React
## 3.0 Configuraicones preliminares en VSC
* `.editorconfig`: Este es un archivo de configuracion de como queremos o como se va a desarrollar en nuestro entorno de desarrollo.
```txt
ident_style = tab
end_of_line = lf -> dependiendo si es mac o windows no hayproblemas en el versionado de git
insert_final_newline = true
tab_width = 2 -> tamanio del los tabuladores
charset = utf-8 -> codificacion de caracteres utf-i
trim_trailing_whitespace = true -> es para que si dejamos un espacion en cada final de linea nos los configura automaticamente
```

* Son `funciones` que se incorporaron alla por los anios 2018, que hacen es simplificar o especificar mecanismos para trabajar con componentes `funcionales`, mientras que en las clases son mas complicados implementar componentes, los hooks son caminos para implementar mas facilmente en los con la ayuda de `componentes funcionales`.
## 3.1 useState()
* Todos los `hooks` de react comienzan con `use...`
* Son funciones de que se emplean con componentes `funcionales` que nos van a permitir trabjar,acceder y realizar operaciones con el `estado privdao` del componente.

## 3.2 useRef()
* Esto es util para identificar elementos y referenciarlos estos elemento dentro de la vista.
* Esto es similar a lo que usaba el `jquery ` para asociar identificador y extraer el id de este.
* Con esto es util para saber el contenido de un elemento HTML.
* `Esto es lo mas parecido a como `js` manipula los atributos del HMTL`
## 3.3 useEffect()
* Controla los cambios en la vista y controla  el ciclo de vida del componente
* Cada vez que hay `cambio  en el componete` se ejecuta el codigo que esta dentro la definicon de useEffect().
* Sol se puede tener un solo `useEffect()`
* Si hay mas de uno el ultimo es el qu se toma en cuenta.

```jsx
    const Ejemplo2 = () => {
      // sintaxis

      const [contador1, setContador1] = useState(0);
      const [contador2, setContador2] = useState(2);

      /**
      * Creamos una referencia con useRef() para asociar
      * una `variable` con un elemento del  DOM del componente (vista HTML).
      */

      const ref = useRef();

      useEffect(() => {
        console.log(" CAMBIO EN EL ESTADO DEL COMPONETE: OJO `ESTAO`");
        console.log("Mostrando Referencia a elemento del DOM");
        console.log(ref); // esto contine una referencia aun elemento del DOM(HTML)
      });
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
```
## 3.4 useContext()
* Esto es util para utilizar los datos o el contexto de datos para utilizar el contexto para pode pasarlo a los componentes inferiores.
* Lo que nos facilita es pasar a traves de los componentes `datos` en ves de hacerlo con `props` sino con `useContext`.
* Estos pueden ser como estados `locales` del componete  sin pensarlo tan explicitamente con `redux.js`.


# 4. Life Cicle Methods
# Mounting.
* Los metodods de vida de los componentes en React.js son aquellas funciones que se encargan de controlar y gestionar `como y cuando` se renderizan estos  componentes en el `DOM`.


![Alt text](image-1.png)

## 4.1 ComponenteDidMount()
* Este es un metodo de vida del componente que se encarga de ejecutar el codigo cuando se `monta` el componente pero `antes` de que se actualice en el `HTML`.

# Updating
## 4.2 componenteDidUpdate()
* Cuando sufre un `cambio` en el `estado` o cuando recibe `props` o cuando se ejecuta una funcion `forceUpdate()` que fuerza la actualizacion de la vista.
* Cuando hay nuevas `props`  se modifican el las props antiguas implica un renderizacion de la vista.
* Cuando se usa el `metodo` especial `setState()`, se actualiza el estado del componete el cual repercute en la actualización del `DOM` de la vista.
* Se puede forzar la actualizacion con el metodo `forceUpdate()`
* Todas estas actualizaciones se realizan sobre el `montaje inicial`, por lo tanto el render necesita una nueva actualizacion
* ojo el cula es controloado por el metodo `componentDidUpdate()`.
# Unmounting
## 4.3 componentWillUnmount()
* Cuando se quita o cuando se oculta en el `html` los componentes en el `dom` o la vista.
* Codigo que se ejecuta `antes` de que se quite o oculte el componente de la vista.


```jsx 


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
```

###  NOTA: Para usar los metodos de ciclo de vida en componentes funcionales se deben `bindear` lo metodos para evitar errores.

### NOTA: Cuando se usa los hooks para los metodos de vida del componete, al colocar un solo `[]` indica que se ejecuta `una sola vez`, mientras implementarlos sin `[]` esto quiere decir que se ejecuta todas la veces.
# Notas
* Se puede embeder codigo `js` dentro de codigo `html` con `{}` dentro de las llaves.
* 


## Componente de Clase
```jsx
  export class DidMount extends Component {

      componentDidMount() {
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
```
## Componete Funcional
```jsx
  export const DidMount = () => {

      useEffect(() => {
          console.log(
                    "Comportamiento antes de que el componente sea aniadido al DOM(renderice)"
                  );
      });
      return (
          <div>
              
          </div>
      );
  }
```
# 5. Estilos en React.js
## 5.1 SCSS y sass (preprocesadores de estilos en CSS)
* Esto nos va a permitir trabajar tanto con `SCSS` o `SASS`
* `Especificidad`: Podemos definir la especifidad a la hora de aplicar estilos a los elementos de forma mas precisa.
* Evitar el `!important` en los estilos

`Instalacion de preprocesadores de estilos`
```bash
npm install --save node-sass
```
* La `herencia` es importante en los estilos
* El `index.css`es el root o en indice de estilos de CSS.
* Los estilos son `heredados` y cargados en cada componente.

## 5.2 Bootstrap
`instalacion` 
```bash
  npm install --save-dev bootstrap
```
* Tenemos que ir al indece `js` de nuestro proyecto e importar `bootstrap` para que nuestro proyecto pueda usarlo.
## 5.3 Bootstrap Icons
* Iconos de la libreria de bootstrap

```bash
  npm i bootstrap-icons --save
```
* Es necesario implementar `funciones` para controlar mas eficientemente los elementos de los componentes.

# 6. Eventos en React.js
* Los componentes desencadenan eventos los cuales pueden implementar para establecer una comunicacion entre componente de orden inferior  y  superior
* Generalmente el hijo es quien `despacha el evento` y el padre es el quien controla la `ejecucion del evento`.
## 6.1 Gestion de Eventos
* `onFocus`:
* `onBlur`:
* `onChange`:
* `onMouseOver`:
* `onMouseOut`:
* `onCopy`
## 6.2 useRef
* Este hook nos permite referenciar objetos `html` en react.js
* Gracias a este hook podemos obtener los artributos y valores de un elemento html referenciado. 

example: 

```jsx
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

```
# 7. Estados en React.js
* Los estados de react son inmutables, se pueden actualiar haciendo copias utilizando funciones de `referenciado` para poder copias el dato y hacer reemplazos

# 8. Depuracion de codigo 
* No confundir dos conceptos muy inmportantes
* `Testing` != `Depuracion`

1. `Testing`: Se centraen buscar el problema o los errores que se puedan haber saltado bajo ciertos casuiticas y poder encontrar un metodo o metologias para poder resolver dichos errores.
* Encontrar diferentes casuisticas que podriaan rompoer nuestro codigo y asegurar que es suficientemente robusta para superar las mismas. 
* Con lo cual se resuelven todas esas casuisticas que podrian originar el error, con lo cual se pueden controlar mucho mas lo errores para que `el usuario` no se percate de que existen esos errores.
* Se realizan `automatizaciones` para que se ejecuten automaticanete.
* Existe una libreria para ayudarnos a hacer `testing`

* `Pruebas unitarias/integracion`
* `Pruebas funcionales`

2. `Depuracion`: Se encarga de resolver `Errores`
* Es un tarea esencial de cualquier desarrollador
* Verificar errores en tiempo de ejecucion
* Es necesario pararlo y encontrar el error en tiempo de ejecucion
* La depuracion es `universal` no existe librerias para ello.

## 8.1 Depuracion en devtools de Chrome

* Busca eleminar los `logs` o `alerts` que luego se quedan y llenan de infomacion innecesaria en la salidaa de consola.

* `||`: esta pestana nos sirve para hacer una pausa o detener la depuracin del coidig
* `stepover`: Con este podemos saltaar a la siguente llamanda de la function
* `stepinto`: con esto vamos inmediatamente dentro del function a evaluar.
* `steep`: con esto saltamos al siguiente `breakpoint`

![Alt text](image-2.png)

* La `linea de ruptura (breakpoint)` indica que vamos a parar la ejecucion en ese punto determinado

* `watcher`: colocar que es lo que queremos ver cual es su valor de una variable, propiedad o funcion el cual queremos estar observando o inspeccionando.


# 9. Buenas Practicas con React.js
* CAda componente de en React.js tienen sus propias m-v-c

## 9.1 MCV
### 9.1.1 Controlador
* Basicamente interacuta entre el modelo(informacion) y la vista.
* Tenemos un controlador para cada una de las pequenias vistas
* Actualiza el modelo
* Cada uno de los `jsx` tiene un controlador
* El controlador envia los datos (modelos) a la vista.
* Controladores, metodos del ciclo de vida
* JS
* Los controladores son los que solicitan los datos a otros fuentes de datos.
* Gestiona la informacion, `actualizar o leer` del modelo los datos que se tienen que pintar en la vista.
* El controlador hace las peticiones o solicitudes a APIs externas o desde fuera. Aqui es donde se coloca la logica para realizar la tarea.


### 9.1.2 Vista
* return- return- jsx
* html o jsx puro
* Es aquella vista el usuario final tiene la posibilidad de interectuar o poder trabajar con el
* Es atra vez de la vista que el usuario recibe esos `datos`
* Parte visual que tendra el usuario para interactuar
* Estos son los componentes con los que el usuario va a interactuar.
* `pages`=== `views`
* La vista nos va a permitir la navegacion entre las diferentes vistas.

### 9.1.3 Modelo
* Inofromacion o datos de sistema
* Datos del modelo
* Clase 
* Trabaja con el modelo
* Estado de los componentes
* La informacion
* Listas, props, stados, tipos de datos, 
* Pueden estar fuera del componente en una API REST 
* Estodos del componente o estados de la aplicacion
* Es el quien persiste o tiene los datos del componente

eg: 
![Alt text](image-3.png)

* Componentes tipo `paginas`
* Un componente contenedor lo que hace es englobar un componente puro internamente para pasarle deterinada informacion  y determinada logica.
* Una vista puede englobar o anidar varios componentes tipo `contenedor`.

# 10. Renderizado Condicional en React.js
```txt
La idea de las paginas web es que el usuario pueda interectuar con ellas
```
* Esta es la forma en como nosotros podemos pintara `renderizar componentes` selectivamente, esta es la magia de `reactivo`.
* Todo aquello en el que se implemente la `logica` es un renderizado condicional
* `Uso de ? - &&`: Estos son operadores importantes que nos permiten realizar operaciones mas eficientes y con menos lineas de codigo.
* El uso del operador ternario es el mas utilizado en React.js

# 11. Formularios
* Todo formulario tiene un evento `onSubmit` que ejecuta alguna funcion para enviar los datos al servidor.
* `Yup`: Constructor de esquemas para construir validacines potenetes
* `Formik`: Es una libreria potente para crear formularios dentro de react.js

instalacion
```bash
  npm install --save formik yup
```
* Validar un fomulario por medio de `esquemas se hace mediante` el atributo `validationSchema` el cual se asocia al esquema creado.
* `Local Storage`: Este es el alamacenamiento en donde los datos `persisten` permanentemente en el navegador
* `Sesion Storage`: Este es el almacenamiento en donde los datos `persisten` solo hasta que cumpla una `sesion ` completa en el navegador.

# 12. Sistema de Enrutamiento en React.js
* `react-router-dom`
* El sistema de enrutamiento nos permite mostrar o no mostrar las vistas en funcion de las rutas
* Las rutas son direcciones de 'url' que nos permiten mostras determinadas vistas
* Este es un modulo de enrutados para trabajar con vistas en html
* `Hooks utiles de react-router-dom`:
  * `useHistory()`: Nos permite navegar entre el historial de navegacion de las rutas.
  * `useLocation()`: Esto nos permite determinar en que rutas estamos en un determinado momento en la vista.
  * `useParams()`: Este hook nos permite capturar un parametro que se pasa por la `URL`.
* Un buen refactor seria guardar las funciones de navegacion en carpetas de `utils` por ejemplo

```bash
  npm install --save react-router-dom
```
## 12.1 Pasar props entre las rutas
* Como paso datos o informacion entre las rutas.

# 13. MUI
* Esta es una libreria potente que nos permite implementar componentes de alta calidad, rapido potente.

instalacion
```bash
  npm install --save @mui/material @emotion/react @emotion/styled
  
  # instalacion de iconos de material icons
  npm install -save @mui/icons-material
```
## 13.1 CLSX
* Es una herramienta para trabajar con estilos en forma de objetos y agregarlo a los hojas de estilo
* Es una forma de jsx pero para los nombres de clase. 
* No se ha implementado en esta session - solo se instalo.

instalacion
```bash
  npm install --save clsx
```

# 14. Asincronizmo y Promesas
* Es aquel proceso que toma un poco de tiempo.
* Es util para realizar peticiones a recursos externos que toman tiempo a la hora de ejecutar peticiones.
* `await`: Es una forma de asegurar el control sobre las funciones asyncronas. Esto genera un punto de reptura que es el control del operaciones asyncronas.
* `La promesa`: Es aquel valor futuro que se va a obtener de algun proceso asyncrono
  * Este es un tipo de dato creado para poder gestionar en js para `gestionar` procesos asyncronos.
  * Gestiona de forma mas rapida todo lo que seria la representacion de un objeto que se va a `completar` o `fallar`.
  * La clase `Promise` se usa para generar promesas.
  * Hasta que una promesa no se `resuelva` no podemos obtener el valor que  genera este mismo.
  * Antiguamente las promesas o los procesos `asynchronously` se trataban con `callbacks` anidados.

La promesa se utiliza para trabajar con procesos asyncronos.
* Todas las funciones asyncronos `se deben gestionar como promesas`.

eg: 

```jsx
  import React from "react";

    const AsyncExample = () => {
      async function generateNumber() {
        return 1;
      }

      function obtainNumber() {
        generateNumber().then((res) => alert(`Response: ${res}`));
      }

      async function generatePromiseNumber() {
        // aqui le decimos estrictamente qeu este es una promesa.
        return Promise.resolve(2);
      }

      function obtainPromiseNumber() {
        generatePromiseNumber
          .then((res) => alert(`Response: ${res}`))
          .catch((err) => alert(`Somethin went wrong: ${err}`));
      }
        

      async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        // con esto le decimos que devuelva una promesa en cuanto termine de realizar el proceso
        // asyncronico.
        return Promise.resolve(sessionStorage.getItem(key));
      }


      function showStorage() {
        saveSessionStorage("name", "Roger")
          .then((res) => alert(`Response: ${res}`))
          .catch((err) => alert(`Error: ${err}`))
          .finally(() => console.log("Name saved and retrevied successfuly"));
      };

      const returnError = async () => {
        await new Promise((resolve, reject) => {
            reject(new Error(`Oooops!.`))
        })
      };

      const consumeError = () => {
        returnError()
            .then((res) => alert(`All was success ${res}`))
            .catch((err) => alert(`Something went wrong` + err))
            .finally(() => alert(`Finally asynchronous process`));

      };


      const urlNotFound = async () => {

        try {
            let response = await fetch(`https://invalidURL`);
            alert(`Response:  ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}`)
        }
      };
      async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello world!");
            }, 2000);
        });

        let message = await promise;
        await alert(`Message received: ${message}`);
      };

      const multiplePromise = async () => {

        let result = await Promise.all(
            [
                fetch('https://reqres.in/api.users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        )
        .catch((error) => alert(`Something went wrong with your URLs: ${error.message}`));
      }
      return (
        <div>
          <button onClick={obtainNumber}>Obtain number</button>
          <button onClick={obtainPromiseNumber}>Obtain promise number</button>
          <button onClick={showStorage}>Show storage</button>
          <button onClick={obtainMessage}>Obtain promise message</button>
          <button  onClick={consumeError}>Consume Error</button>
          <button onClick={urlNotFound}>Request  HTTP</button>
          <button onClick={multiplePromise}>Get all Promises</button>
        </div>
      );
    };

    export default AsyncExample;
```
* Ciclo de vida de las promesas.

## 14.1 Observables 
![Alt text](image-5.png)


* Con los `observables` podemos devolver valores o un conjunto de valores(`observables o generadoras`)

* En caso de que se devuelva un `unico` valor se pueda `usar las promesas` para gestionar el error
* Para el caso de `valores multiples` se pueden usar las `generadores` para gestionar estos valores.
* Valores unicos -> `promesas` -> sincronico
* Valores multiples -> `generadores` -> asyncronico

instalacion`

```bash
  npm install --save rxjs
```
* Se pueden aplicar los principios de `OBSERVABLES`  de la programacion.

# 15. Peticiones HTTP
* Las peticiones http nos permiten realizar peticiones a  contenidos externos a traves metodos HTTP.
* Se puede inpeccionar el resultado de las peticiones http en la consola de `Network`.

![Alt text](image-6.png)

* Es  una alterntiva mucho mas eficiente realizar peticiones y solicitudes HTTP con `axios`.
* El endpoint que usamos es el de link: https://reandomuser.me/api/
* El endpoint que usamos para el fetch es. Link: https://reqres.in/api/users/
* Ejeplo de como realizar configuraciones avanzadas en `axios`.
```js
    import axios from 'axios';

    // default config for AXIOS
    export default axios.create(
        {
            baseURL: 'https://randomuser.me/api', // en el file axiosService le agregaamos un '/' para la peticion.
            responseType: 'json',
            timeout: 5000, // habra un a fallo si no hay respuesta en 5 segundos
            method: 'GET',
        }
    );

```

## 15. 1 Token 

* Es un mecanismo de autenticacion de usuario por `sesion`.
* Existen diferentes formas de autentificar
* El mas extendido y el mas usado es `JWT`
* Nos permite comprobar si la sesion esta activa
* Quien es el usuario y ademas guarda una informacion privada de la validacion de ese autenticacion para ese usuario.
* Con cada peticion el `back-end` necesita verficar el `token ` que se le envia por el header en cada peticion.
* Es un cifrado un hash que se genera con una funcion matematica concreta.
* Es una identificacion de un valor
* Despues de hacer el login lo ideal es guardar los datos en `Session Storage del navegador`.
* `Desplegar`: Es el termino informatico que se usa para referirce al renderizado de un proyecto en el navegador.

# 16 Gestiones de Estado en React.js
## 16.1 Redux
* Es un gestor de estados de react.js  o gestor de informacion compartida a lo largo de la aplicacion entre los componentes
* Este fuerza la actualización del estado mediante `reducer`
* Los estado en `redux ` son inmutables
* `reducer`: Se encargan de generar nuevos estados a partir de `despachar` ciertas `acciones` desde diferentes  componentes.
* Redux busca organizar los estados de forma, organizado y gestion de manera controlodo y eficiente
* Los componentes de orden superior son los que despacharan las acciones que seran escuchadas por los reducers que son son funciones `puras`, los cuales generan un nuevo estado a partir de un `accion` y un `payloa(contenido)`.
* Este `estado` es actualizado con los `acctions` y el `payload` y todos los componetes que lo escuchan quedan replicados o se les replica la informacion para que ests actualicen la vista o cualquier otro caso.
* Redux.js se creo para resolver el problema de gestion de estado, para facilitar la gestion de estados en el que un componente muy esta muy por encima del hijo o el hijo esta muy por debajo del padre o en niveles de mas profundos. Esto problema no es un buena forma de comunicar los componente. 
* Redux soluciona este problema de forma sencilla, controlado, y eficiente.

## 16.2 Componentes de Redux.js
### 16.2.1 Store
* Son estados pequenios o grandes que esten relaciones entre si o que cumplen un determinado rol
* Mantiene el estado generico para que los componentes puedan acceder a el
* El `store` es aquel conjunto que guarda o engloba todos los estados *`locales`* por asi decirlo y luego genera un estado `global` es si que escucha a las acciones de los componentes para poder comunicarse con ellos.

### 16.2.2 Reducer
* Es un conjunto de funciones qu estan compuestos por  un `estado inicial` y que apartir de acciones devuelven un `estado` nuevo
* ES una function con `switch-case`
* Este esta `escuchando` ante las `acciones` que puede realizar un determinado componente el cual `despacha` estas acciones al reducer.
* Este es la funcion que escucha a las acciones de que `despachan los componentes`
* Atravez del `payload` que contiene la `accion`enviada el `reducer` evalua la accion y a partir de ello genera un nuevo estado para dicho componente.
* 
### 16.2.3 Actions
* Las acciones son objetos que contienen un `tipo` y `payload`
* `tipo`: es un `string`
* `payload`: es cualquier tipo de dato.
* Los componentes lanzan o `despachan` acciones que el `rootreducer`, este las escucha que es gestionada por el `switch-case` que viene con las `actions`, el reducer evalua esta accion con el type y el payload y aparti de ello genera un nuevo `estado` para esa `action` en especifo. Una vez hecho esto, el coponente `actualiza la vista` con el nuevo estado genrado por el `reducer`.

eg:
![Alt text](image-7.png)

primeros pasos.

```bash 
  $ npm i react-redux redux #estos so los dos principales dependencias para trabajar con Redux.js
  $ npm i --save-dev redux-devtools-extension # es importante instalar esta dependencia solo a modo de desarrollo, no de produccion.

```
* `composeDevTools`: es una funciona que nos permite visualizar en formato JSON todo el `estado` de la aplicacion.
Nota importante:
Se pueden realizar `dispatchs` con la herramienta de `devTools` de chrome.

### 16.2.4 Comunicaciones entre componentes con Redux.js
* `Containers`: Son los que van a tener la tarea de comunicar a los componentes mas pequieios y tener el acceso a la ligica en si de la app.

partes: 

```jsx
    // Es un componente funcional normal
  import React from 'react'
  import { connect } from 'react-redux'
  import TodoList from '../pure/TodoList'

  export const TodoContainer = (props) => {
    return (
      <div>TodoContainer</div>
    )
  }
  /*
  * Este es metodo propio de redux que nos permite enviar el estado global
  * al las props del componente al cual esta conectado (<TodoList/>)
  */
  const mapStateToProps = (state) => ({}) 

  /*
  * Este un metodo de redux que nos va a permitir enviar los metodos/ funciones de `despacho`
  * de acciones a las props del componente al cual esta conectado.
  */
  const mapDispatchToProps = {}

  export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

```
![Alt text](image-8.png)

# 17. Gestion de estados `globales` ASINCRONOS
* Serie de menanismos que nos permiten controlar las peticiones asincronos.
## 17.1 Sagas
* Esta es una alternativa que nos permite atravez de funcioens generadoras nos permiten controlar las `asincronia`, ello nos permite gestionar la ejecuicon de determinadas  tareas en `segundo  plano`, mientas que se van gestionando para capturar diferentes `acciones`.

### 17.1.1 Watcher
* Este es una funcion generadora, que va a estar escuchando o buscando determinadas `peticiones` o tipos de `acciones` que estara escuchando por el watcher-sga, una vez  que los optiene lo recibe y lo gestiona la emicion de un `worker` 

### 17.1.2 Worker
* Esta es la funcion que `realmente` realiza la tarea asincrona peticion http, se gestiona la promesa y es cuando se resuelve,es entonces que a travez de un metodo concreto se ejecutara una nueva accion `despachara` con la accion que realmente el reducer va a captura, este atualizara el estado de la app, y con ello se actualizara la vista de esta misma.
* Este es un tipo de middleware, que se ponde delante del reducer y el `dispatch de acciones` para las operaciones `asincronas`.
* otra alternativa es `redux-thunk`.

primeros pasos para trabajar con `saga`: 

```bash
  $ npm install --save redux-saga
  # otra opcion mas facil
  $ npm install --save redux-thunk
```



# 18. Gestion de estados globales mediante Hooks
* Esta es una alternativa para gestionar los estados globales mediante hooks.

## 18. 1. useContext():
* Nos sirve pasar el estado de de un componente hacia un componente inferior que se pasa como contexto que simplifica la gestion de estados globales.
* Este es el hook que se usa para pasar los estados globales a traves del contexto de la aplicacion

## 18.2. useReducer()
* Este es un hook importante para trabajar con estados globales
* Este nos permite pasar los estados globales a traves de la llamada de ciertas funciones
* Tambien este hook nos sirve para simular el trabajo de redux con la gestion de estados globales.
* Es una alternativa o solucion para sustituir el gestado global de los estados globales de la aplicacion
* Con este hook, nos permite obviar toda la logica del uso de `redux.js` en la gestion de estados globales de la app.

* Nos sirve para almacenar estados `globales` de un componente para tal como un `useState()`.
  - Esto los que hace es asociar una function que en este caso seria nuestro `reducer`
  - Nos devuelve un array que contiene el valor del estado global actualizado y una `funcion` que se va a encargar de `gestionarlo`
  - cada `estado` esta asociado a un unico `rootReducer`.
* `Redux.js`: es mas complejo, requiere tener una arquitectura de aciones mas precisas
nota: 
- para aplicaciones mas robustas es impresindible usar `redux.js`;
Ventajas
- No permite simplificar la gestion de estados globales de la app
- Si las versiones de librerias de terceros cambia, la gestion de estados con hook no se vera afectado, dado que viene con la libreria de  react. 
- Con este hook tenemos mas control sobre los estados de la aplicacion.
- Para applicacones mas pequenias es mas util simular `redux.js` con los hooks de `react`;

## 18. 3. useDispatch()
* ESte hook nos sirve para despachar acciones hacia el reducer para realizar ciertas modificaciones o actulaizaciones en el estado.


ejemplo final: 

```jsx
import React, { useReducer } from "react";

// Actions
const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const LOGOUT = "LOGOUT";

// estado inicial de la app
const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

// Functio que va a ser nuestro reducre
const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldName,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggedIn: false,
      };

    case SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        error: `Invalid username or password`,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    case LOGOUT:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };

    default:
      return state;
  }
};
const LoginUseReducer = () => {
    
  const [state, dispatch] = useReducer(loginReducer, initialState);
  // obtain all variables from state
  const { username, password, error, isLoading, isLoggedIn } = state;

  // submit
  const submit = async (e) => {
    e.preventDefault();

    // dispatch login action
    dispatch({ type: LOGIN });

    try {
      await function login({ username, password }) {
        return Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === "admin" && password === "admin") {
              resolve();
            } else {
              reject();
            }
          }, 2000);
        });
      };
      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <div>
            <h1>
              Wellcome, {username}
              <button onClick={logout}>Logout</button>
            </h1>
          </div>
        ) : (
          <form onSubmit={submit}>
            {error && <p style={{ color: "tomato" }}>{error}</p>}
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldName: "username",
                  payload: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldName: "password",
                  payload: e.target.value,
                })
              }
            />

            <button type="submit">{isLoading ? "Logging" : "Login"}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseReducer;

```

# Notas importantes: 
* Evitar el uso de estados privados en componente mas pequenios `puros`.
* La `funcionalidad` para la que se va a usar el un determinado componente es lo que lo diferencia del resto de componentes.
* Los comonentes tambien pueden pasar a componentes internos `hojas de estilo css`.
* `react-dom`: nos permite interactuar con el `DOM` html en nuestro proyecto.
* Si estamos trabajando con TypeScript debemos instalar la dependencia correcta para las rutas.
![Alt text](image-4.png)
* La mejor forma de enrutar es  que `las rutas siempre deben estar dentro del App.js file`.

* La carpeta `config` de redux se usa para configuarar el `store` de redux.

## Extensiones importantes
1. Color highlighting
2. Debbuger for firefox
3. ES7 React/Redux/GraphQL/React-Native snippets.
4. ESLintO(cotrola las reglas y com se debe programas con ES6 en js)-> marcar un estandar de programacion a lahora de desarrollar.
5. Firebase
6. Image preview
7. Jest
8. Jest Runner Test
9. Js Jsx Snippets
10. Material Icon Theme
11. Path Intellisense
12. Version Lens
13. Live shere(pair program)
14. 
14. 
### Comparativas
![Alt text](image.png)

