import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function VoteCandidate(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    
    axios
      .put("http://localhost:8080/api/v1/candidates/vote", {
        id: `${props.id}`,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(props.id)
          swal({
            title: "Good job!",
            text: "Vote registered",
            icon: "success",
            button: { text: "OK", className: "btn_1" },
          });
        }
        else{console.log("ERROR")}
      })
      .then(setShow(false));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Vote
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vote...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to register this vote ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
