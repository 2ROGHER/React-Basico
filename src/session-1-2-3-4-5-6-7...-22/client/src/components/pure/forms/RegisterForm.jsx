import React, { useState } from "react";

const RegisterForm = () => {
  const initialCredentials = {
    user: "",
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialCredentials);
  return <div></div>;
};

export default RegisterForm;
