import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import swal from "sweetalert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CampaignPassModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Button variant="primary" onClick={handleShow}>
        View Campaign
      </Button>

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
              <Field
                name="password"
                type="password"
                placeholder="Password..."
              />
              <Button className= "accessButton" variant="primary" type="submit">
                Submit
              </Button>
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
