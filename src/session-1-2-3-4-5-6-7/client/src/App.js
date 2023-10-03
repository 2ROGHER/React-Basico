import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFunctional from './components/pure/GreetingFunctional';
import TaskList from './components/container/TaskList';
import Ejemplo3 from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/GreetingStyled';


var name = "Roger";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Aqui pintamos nuestro componete `Greeting.jsx` */}
        {/* <Greeting name={name}/> */}

        {/* 
            Esto es de la session 2
          <GreetingFunctional name={name}/> 
        */}

        <TaskList/>

        {/* <Ejemplo3 nombre={"Roger"}>
          //Todo lo queeta aqui dentro es tratado como prop.children 

          <h3>Contenido de props.children</h3>
          <h4>Esto tambine es un prop.children del componete superior</h4>
        </Ejemplo3> */}




        {/* <GreetingStyled name="roger"/> */}
      </header>
    </div>
  );
}

export default App;
