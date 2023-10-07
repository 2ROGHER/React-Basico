import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFunctional from './components/pure/GreetingFunctional';
import TaskList from './components/container/TaskList';
import Ejemplo3 from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/GreetingStyled';
import { NavLink, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import TaskPage from './pages/tasks/TaskPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import AboutPage from './pages/about/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';
import { useEffect } from 'react';
import { Task } from './models/task.class';
import StatePage from './pages/home/StatePage';
var name = "Roger";

function App() {

  let logged = false;
  const navigate = useNavigate();

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'New Task 1',

    }
  ]
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log("User logged?: " + logged);
  }, []);


  return (
    <div className="App">
      {/** Aqui pintamos nuestro componete `Greeting.jsx` */}
      {/* <Greeting name={name}/> */}

      {/* 
            Esto es de la session 2
          <GreetingFunctional name={name}/> 
        */}

      {/* <TaskList/> */}

      {/* <Ejemplo3 nombre={name}>
          //Todo lo queeta aqui dentro es tratado como prop.children 

          <h3>Contenido de props.children</h3>
          <h4>Esto tambine es un prop.children del componete superior</h4>
        </Ejemplo3> */}




      {/* <GreetingStyled name={name}/> */}

      <aside>
        <NavLink to='/'>| HOME |</NavLink>
        <NavLink to='/about'> ABOUT |</NavLink>
        <NavLink to='/faqs'> FAQs |</NavLink>
        <NavLink to='/any404'> NOT FOUND |</NavLink>
        <NavLink to='/task/1'> TASK 1 |</NavLink>
        <NavLink to='/task/2'> TASK 2 |</NavLink>
        <NavLink to='/login'> LOGIN |</NavLink>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path='/online-state' element={<StatePage/>}/>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path='/login' element={<LoginPage />}>
            {
              // TODO: Esto me sale un error, verificar como hacerlo de la mimsa forma con la misma version
              !logged ?
                () => {
                  alert("You are logged in first. Redirect to Home...");
                  navigate('/');
                }
                : <LoginPage />
            }
          </Route>
          <Route to="/profile" >
            {
              // TODO: Esto me sale un error, verificar como hacerlo de la mimsa forma con la misma version
              logged ?
                <ProfilePage />
                : () => {
                  // redirect to `/login`.
                  alert('YOu must be logged in. Redirecting to home...');
                  navigate('/login');
                }
            }
          </Route>
          <Route exact path='/task/:id' render={({ match }) => (<TasksDetailPage task={taskList[match.params.id-1]} />)}>

          </Route>
        </Routes>
      </main>

    </div>
  );
}

export default App;
