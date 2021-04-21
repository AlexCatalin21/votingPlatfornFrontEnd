import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import swal from "sweetalert";

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values) =>{
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
  }
    
  

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
            <div className="row">
              <Form className="registerForm">
                Email:
                <Field name="email" type="email" placeholder="Email..." />
                Firstname:
                <Field
                  name="firstName"
                  type="text"
                  placeholder="Firstname..."
                />
                Lastname:
                <Field name="lastName" type="text" placeholder="Lastname..." />
                Password:
                <Field
                  name="password"
                  type="password"
                  placeholder="Password..."
                />
                Confirm password:
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />
                Birthdate:
                <Field name="birthDate" type="date"/>
                Select your gender:
                <Field as="select" name="genderID">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Field>
                <input className="btn_1" type="submit"></input>
              </Form>
            </div>
          </div>
      </Formik>
    </div>
  );
}
