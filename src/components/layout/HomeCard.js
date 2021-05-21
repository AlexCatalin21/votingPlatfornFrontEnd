import React from 'react';
import Card from "react-bootstrap/Card";

export default function HomeCard(props) {
    return (
        <div>
            <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.cardTitle}</Card.Title>
              <Card.Text>
                {props.cardText}
              </Card.Text>
              <Card.Link href={props.link}>Create campaign</Card.Link>
            </Card.Body>
          </Card>
        </div>
    )
}
