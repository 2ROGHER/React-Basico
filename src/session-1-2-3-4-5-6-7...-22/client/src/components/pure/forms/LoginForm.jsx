import React from "react";

/**
 * Componente que va a contener un formulario para la autenticacion de usuario.
 *
 * @returns
 */
 
const LoginForm = () => {
  const initialCredentials = {
    user: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  return <div></div>;
};

export default LoginForm;
