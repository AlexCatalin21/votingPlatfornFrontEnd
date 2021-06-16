import React,{useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import swal from 'sweetalert';

export default function VoteCandidate(props) {
  const [show, setShow] = useState(false);
  const [voted,setVoted] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const votePeriodCheck = () =>{
    if(props.votePeriodCheck === "Accept"){
      return (<Button className="voteBtn" variant="primary" onClick={handleShow}>
      Vote
    </Button>)
    }
    return (<div className="periodErrorMessage">Out of voting period!</div>)
  }

  const handleSubmit = () => {
    axios
      .put("http://localhost:8080/api/v1/candidates/vote", {
        id: `${props.id}`, voterId: window.sessionStorage.getItem("userId"), campaignId :`${props.campaignId}`
      })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          setVoted(true);
          window.location.href=`http://localhost:3000/campaign-detail/${props.campaignId}`
        }
        else if(res.status === 500){
          console.log("This user already voted!")
          swal({
            title: "Error",
            text: "You already voted!",
            icon: "error",
            button: { text: "OK", className: "btn_1" },
          })
        }
      })
      .then(setShow(false));
  };

  return (
    <div>
      {votePeriodCheck()}

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
