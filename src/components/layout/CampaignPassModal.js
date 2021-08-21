import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import swal from "sweetalert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CampaignPassModal(props) {
  const [show, setShow] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    if (window.sessionStorage.getItem("userEmail")) {
      setUserIsLoggedIn(true);
    }
  }, []);

  const checkIfLogged = () => {
    if(userIsLoggedIn){
      return (<Button variant="primary" onClick={handleShow}>
      View Campaign
    </Button>)
    }
    return(<div>You have to <a href="/login">sign in</a> to see a campaign!</div>)
  }

  const handleSubmit = (values) => {
    axios
      .post(
        "http://localhost:8080/api/v1/campaign/check-campaign-password",
        values
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(values);
          swal({
            title: "Good job!",
            text: "You can see the campaign now!",
            icon: "success",
            button: { text: "OK", className: "btn_1" },
          }).then(function () {
            window.location = props.link;
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {checkIfLogged()}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Access campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              password: "",
              id: props.id,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <label className="fieldLabel">Campaign password:</label>
              <div className="inputFieldModal">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="Password..."
              />
              <Button className= "accessButton" variant="primary" type="submit">
                Submit
              </Button>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
