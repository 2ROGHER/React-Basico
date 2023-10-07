import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";
import * as Yup from "yup";

const RegisterFormik = () => {
  const user = new User("root", "admin", ROLES.USER);

  const initialValues = {
    password: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short ")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: USER/ADMIN")
      .required("Role is required"),
    password: Yup.string()
      .email("Invalid password format")
      .min(8, "Password too short")
      .required("password is required")
      .matches(`[A-Za-z0-9]^`),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match"),
      })
      .required("You must confirm your password"),
  });
  const submit = (values) => {
    alert("Register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmiting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username: </label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />

            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}

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
              <ErrorMessage name="password" component="div" />
            )}

            <label htmlFor="confirm">Confirm: </label>
            <Field
              type="confirm"
              id="confirm"
              name="confirm"
              placeholder="confirm password"
            />

            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}

            <label htmlFor="role">Role: </label>
            <Field type="text" id="role" name="role" placeholder="role" />

            {errors.role && touched.role && (
              <ErrorMessage name="role" component="div" />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
