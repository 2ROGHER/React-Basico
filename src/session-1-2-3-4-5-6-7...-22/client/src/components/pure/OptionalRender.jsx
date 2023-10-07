import React from "react";
// Con el optional render tenemos mas control con los `componentes` que se
// renderizan en las  vistas
let red = 20;
let green = 200;
let blue = 100;

const loggedStyle = {
  background: `rgb(${red}, ${green}, ${blue})`,
  color: `rgb(${red+23}, ${green+23}, ${blue-23})`
}

const LoginButton = ({ loginAction, propStyle}) => {
  return <button onClick={loginAction} style={propStyle}>Login</button>;
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return <button onClick={logoutAction} style={propStyle}>Logout</button>;
};

const loginAction = () => {
  setAccess(true);
};

const logoutAction = () => {
  setAccess(false);
};

const OptionalRender = () => {
  const [message, setMessage] = useState(0);
  const [access, setAccess] = useState(true);

  const updateAccess = () => {
    // toggle value
    setAccess(!access);
  };

  let optionalButton;

  //   if (access) optionalButton = <button onClick={updateAccess}>Log out</button>;
  //   else optionalButton = <button onClick={updateAccess}>Log in</button>;

  if (access) optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={loggedStyle}/>;
  else optionalButton = <LoginButton loginAction={loginAction} />;

  // unread messages
  let addMessages = () => {
    setMessage(message + 1);
  };
  return (
    <div>
      {optionalButton}
      {access ? (
        // No olvidar usar el div para envolver todo el codigo si falla en algo
        <div> 
          {message >= 0 && <p>You have {message} new messages...</p>}
          {message == 0 && <p>There are no new messages...</p>}
          {/* Operador ternario */}
          {message > 0 ? (
            <p>
              You have {message} new message{message > 1 ? "s" : ""}...
            </p>
          ) : (
            <p>There are no new messages...</p>
          )}
          <button onClick={addMessages}>
            {message == 0 ? "Add your first messagess" : "Add new Message"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionalRender;
