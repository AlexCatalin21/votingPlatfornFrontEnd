import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import axios from "axios";
import swal from "sweetalert";

export default function Login() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setUserSessionStorage = () => {
      if (window.sessionStorage.getItem("userEmail") !== undefined) {
        const userEmail = window.sessionStorage.getItem("userEmail");
        axios.get("http://localhost:8080/api/v1/auth/get-user/" + userEmail).then((res) => {
          console.log(res.data);

          window.sessionStorage.setItem("userId", res.data.id);
          window.sessionStorage.setItem("firstName", res.data.firstName);
          window.sessionStorage.setItem("userGender", res.data.gender.gender);
          window.sessionStorage.setItem("userBirthdate",res.data.birthdate);
        });
      }

    }

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
            window.sessionStorage.setItem("userEmail",values.email)
            setUserSessionStorage();
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
                email : "",
                password : ""
            }}
            onSubmit = {handleSubmit}
              >
                  <div className = "container">
                      <div className = "row">
                        <Form className = "loginForm">
                            Email:
                            <Field name = "email" type = "email" placeholder = "Email..."/>
                            Password:
                            <Field name = "password" type = "password" placeholder = "Password..."/>
                            <input className="btn_1" type="submit"></input>
                        </Form>
                      </div>
                  </div>
              </Formik>
        </div>
    )
}