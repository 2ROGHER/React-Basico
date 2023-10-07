import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

 const LoginForm = ({ loged, fetching, onLogin }) => {
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

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Formik</h1>
      <Formik
        // *** Initial Vales ***//
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // *** onSubmit Event ***//
        onSubmit={async (values) => {
          onLogin(values.email, values.password);
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

              <button type="submit">Login</button>
                {
                    fetching ? (<p>Loading ...</p>) : null
                }
              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
    loged:PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default LoginForm;
