import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //create file to store url

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
        console.log(err);
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
        <div className="container">
          <h3>Register</h3>
          <div className="registerForm">
            <Form>
              <div className="registerField">
              <div><strong>Email</strong></div>
                <Field className="inputField" name="email" type="email" placeholder="Email..." />
              </div>
              <div className="registerField">
                <div className="registerField">
                <div><strong>Firstname</strong></div>
                <Field
                className="inputField"
                  name="firstName"
                  type="text"
                  placeholder="Firstname..."
                />
                </div>
                <div className="registerField">
                <div><strong>Lastname</strong></div>
                <Field className="inputField" name="lastName" type="text" placeholder="Lastname..." />
                </div>
              </div>
              <div className="registerField">
                <div className="registerField">
                <div><strong>Password</strong></div>
                <Field
                className="inputField"
                  name="password"
                  type="password"
                  placeholder="Password..."
                />
                </div>
                <div className="registerField">
                <div><strong>Confirm password</strong></div>
                <Field
                className="inputField"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />
                </div>
              </div>
              <div className="registerField">
              <div><strong>Birthdate</strong></div>
                <Field className="inputField" name="birthDate" type="date" />
              </div>
              <div className="registerField">
              <div><strong>Select your gender</strong></div>
                <Field className="inputField" as="select" name="genderID">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Field>
              </div>
              <Button className="registerbtn" variant="primary" size="lg" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}
