import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/container/TodoContainer';
import TodoFormContainer from './components/container/TodoFormContainer';
import FilterOption from './components/pure/FilterOption';

function App() {
  return (
    <div className="App" style={{background: '#333'}}>
      <TodoContainer/>
      <TodoFormContainer/>
      <FilterOption/>
    </div>
  );
}

export default App;
