import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import CampaignPassModal from "./CampaignPassModal";

export default function CampaignCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
             Start date :{props.startDate}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
             Expire date :{props.expireDate}
          </Card.Subtitle>
          <CampaignPassModal link={props.link} id={props.id}/>
        </Card.Body>
      </Card>
    </div>
  );
}
