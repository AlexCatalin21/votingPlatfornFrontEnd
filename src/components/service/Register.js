import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //create file to store url

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please insert an email adress.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validateRequiredField = (value) => {
    let error;
    if (!value) {
      error = "Please complete the field.";
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

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Please complete the field.";
    }
    return error;
  };

  const validateConfirmPassword = (pass, value) => {
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Password not matched";
      }
    }
    return error;
  };

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:8080/api/v1/auth/register", values)
      .then((res) => {
        if (res.status === 200) {
          setIsSubmitted(true);
          console.log(values);
          swal({
            title: "Good job!",
            text: "Your registration was succesful",
            icon: "success",
            button: { text: "OK", className: "btn_1" },
          }).then(function () {
            window.location = "/login";
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Something went wrong!",
          text: "Please make sure you completed all fields!",
          icon: "error",
          button: { text: "OK", className: "btn_1" },
        });
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          genderID: "",
          birthDate: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <div className="container">
            <h3>Register</h3>
            <div className="h-100 p-5 bg-light border rounded-3">
              <Form>
                <div className="registerField">
                  <label className="form-label" for="email">
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
                <div className="registerField">
                  <div className="registerField">
                    <label for="firstName" className="form-label">
                      Firstname
                    </label>
                    <Field
                      className="form-control"
                      name="firstName"
                      type="text"
                      placeholder="Firstname..."
                      validate={validateName}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="errorMessage">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="registerField">
                    <label for="lastName" className="form-label">
                      Lastname
                    </label>
                    <Field
                      className="form-control"
                      name="lastName"
                      type="text"
                      placeholder="Lastname..."
                      validate={validateName}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="errorMessage">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="registerField">
                  <div className="registerField">
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
                  <div className="registerField">
                    <label for="confirmPassword" className="form-label">
                      Confirm password
                    </label>
                    <Field
                      className="form-control"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password..."
                      validate={(values) =>
                        validateConfirmPassword(values.password, values)
                      }
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="errorMessage">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>
                <div className="registerField">
                  <label for="birthdate">
                    Birthdate
                  </label>
                  <Field
                    className="form-control"
                    name="birthDate"
                    type="date"
                    validate={validateRequiredField}
                  />
                  {errors.birthDate && touched.birthDate && (
                    <div className="errorMessage">{errors.birthDate}</div>
                  )}
                </div>
                <div className="registerField">
                  <label for="genderID" className="form-label">
                    Select your gender
                  </label>
                  <Field
                    className="form-control"
                    as="select"
                    name="genderID"
                    validate={validateRequiredField}
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Field>
                  {errors.genderID && touched.genderID && (
                    <div className="errorMessage">{errors.genderID}</div>
                  )}
                </div>
                <Button
                  className="registerbtn"
                  variant="primary"
                  size="lg"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
