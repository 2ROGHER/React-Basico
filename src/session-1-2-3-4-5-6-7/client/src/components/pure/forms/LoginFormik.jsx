import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import '../../../styles/task.scss';

const LoginFormik = () => {

  // Creamos el esquema para las validaciones.
  const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Email format invalid')
                .required("Email is required"),

        password: Yup.string()
                    .required("Password is required"),
                
    }
  )

  

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
            await new Promise((r) => setTimeout(r, 1000))
            alert(JSON.stringify(values, null, 2));
            // Guardamos los datos en local storage
            localStorage.setItem('credentials', values);
        }}

      >
        {/* Obtenemos las propieades del Formik 
        Son campos que nos permiten obtener cada uno de estos campos para pode trabajar con ellos*/}
        {
            props => {
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

                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                  </Form>
                );
            }
        }
      </Formik>
    </div>
  );
};

export default LoginFormik;
