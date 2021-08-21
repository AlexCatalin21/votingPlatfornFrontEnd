import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import swal from "sweetalert";

export default function Login() {
  //create file to store url
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setUserSessionStorage = () => {
    if (window.sessionStorage.getItem("userEmail") !== undefined) {
      const userEmail = window.sessionStorage.getItem("userEmail");
      axios
        .get("http://localhost:8080/api/v1/auth/get-user/" + userEmail)
        .then((res) => {
          console.log(res.data);

          window.sessionStorage.setItem("userId", res.data.id);
          window.sessionStorage.setItem("firstName", res.data.firstName);
          window.sessionStorage.setItem("userGender", res.data.gender.gender);
          window.sessionStorage.setItem("userBirthdate", res.data.birthdate);
        });
    }
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please insert an email adress.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please insert a password.";
    } else if (value.length < 6) {
      error = "You must provide a minimum 6 characters password.";
    }
    return error;
  };

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:8080/api/v1/auth/login", values)
      .then((res) => {
        if (res.status === 200) {
          setIsLoggedIn(true);
          console.log(values);
          swal({
            title: "Good job!",
            text: "You are logged in!",
            icon: "success",
            button: { text: "OK", className: "btn_1" },
          }).then(function () {
            window.location = "/";
          });
          window.sessionStorage.setItem("userEmail", values.email);
          setUserSessionStorage();
        }
      })
      .catch((err) => {
        if ((err.response.data = "Invalid credentials")) {
          swal({
            title: "Something went wrong!",
            text: "Invalid credentials!",
            icon: "error",
            button: { text: "OK", className: "btn_1" },
          });
        }
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <div className="container">
            <h3>Sign in</h3>
            <div className="h-100 p-5 bg-light border rounded-3">
              <Form>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <Field
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email..."
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && (
                    <div className="errorMessage">{errors.email}</div>
                  )}
                </div>
                <div className="loginField">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Password..."
                    validate={validatePassword}
                  />
                  {errors.password && touched.password && (
                    <div className="errorMessage">{errors.password}</div>
                  )}
                </div>
                <Button
                  className="loginbtn"
                  variant="primary"
                  size="lg"
                  type="submit"
                >
                  Sign in
                </Button>
                <div>
                  You don't have an account? <a href="/register">Register!</a>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
