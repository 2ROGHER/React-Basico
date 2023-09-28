import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFunctional from './components/pure/GreetingFunctional';


var name = "Roger";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Aqui pintamos nuestro componete `Greeting.jsx` */}
        {/* <Greeting name={name}/> */}
        <GreetingFunctional name={name}/>
      </header>
    </div>
  );
}

export default App;
