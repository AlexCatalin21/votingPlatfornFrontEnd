import React, {useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";

export default function HomeCard(props) {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem("userEmail")) {
      setUserIsLoggedIn(true);
    }
  }, []);

  const checkUserLoggedIn = () => {
    if(userIsLoggedIn){
      return (<Card.Link href={props.link}>Create campaign</Card.Link>)
    }
    return(<div>You have to <Card.Link href="/login">sign in</Card.Link> to create a campaign!</div>)
  }

    return (
        <div>
            <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.cardTitle}</Card.Title>
              <Card.Text>
                {props.cardText}
              </Card.Text>
              {checkUserLoggedIn()}
            </Card.Body>
          </Card>
        </div>
    )
}
