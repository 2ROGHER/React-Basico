import React, { useState } from "react";
import {
  createUser,
  getAllPagedUsers,
  getAllUsers,
  getUserById,
  login,
} from "../../services/axiosCRUDService";
import LoginFormik from "./forms/LoginFormik";
const AxiosCRUDExample = () => {
  // Esto es una forma basica de como hacer el `login` para un usuario.
  const [data, setData] = useState([]);

  const initialCredentials = {
    email: "",
    password: "",
  };

  // Creamos el esquema para las validaciones.
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email format invalid")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          // Una buena practica es guardar los datos en la sesion storage
          sessionStorage.setItem("token", response.data.token);
          console.log(response.data.results);
          setData(response.data.results);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`);
        sessionStorage.removeItem("token");
      });
  };

  const obtainAllUsers = () => {
    getAllUsers
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        alert("Request completed successfully");
      });
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        alert("Request completed successfully");
      });
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        alert("Request completed successfully");
      });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if(response.status == 201) alert(JSON.stringify(response.data));
        else throw new Error('Something went wrong with the request');
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        alert("Request completed successfully");
      });
  };

  return (
    <div>
      <button onClick={authUser}>Login</button>
      <h1>*** User Data: See to on `sessionStorage` ***</h1>
      <div>
        <h1>Login Formik</h1>
        <Formik
          // *** Initial Vales ***//
          initialValues={initialCredentials}
          // *** Yup Validation Schema ***
          validationSchema={loginSchema}
          // *** onSubmit Event ***//
          onSubmit={async (values) => {
            console.log("values: ", values);
            authUser(values);
          }}
        >
          {/* Obtenemos las propieades del Formik 
        Son campos que nos permiten obtener cada uno de estos campos para pode trabajar con ellos*/}
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
            } = props;

            return (
              <Form>
                <label htmlFor="email">Email: </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                />
                {errors.email && touched.email && (
                  <div className="error">
                    <p>{errors.email}</p>
                  </div>
                )}

                <label htmlFor="password">Password: </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />

                {errors.password && touched.password && (
                  <div className="error">
                    <p>{errors.password}</p>
                  </div>
                )}

                <button type="submit">Submit</button>

                {isSubmitting ? <p>Login your credentials...</p> : null}
              </Form>
            );
          }}
        </Formik>
        {/* Example buttons to test API responses */}
        <div>
          <button onClick={obtainAllUsers}>get all users</button>
          <button onClick={() => obtainAllPagedUsers(3)}>
            get all (page 3) paged users
          </button>
          <button onClick={() => obtainUserById(2)}>get user by id (2)</button>
          <button onClick={() => createNewUser('Jonh Doe', 'developer')}>create a user</button>
        </div>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
