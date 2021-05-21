import React from "react";
import Card from "react-bootstrap/Card";
import topic from "../../resources/topic.png";
import candidate from "../../resources/candidate.png";
import HomeCard from "./HomeCard.js";

export default function Home() {
  return (
    <div className="container">
      <div className="row homeContainer">
        <div className="col">
          <HomeCard
            cardTitle="Topic Campaign"
            img={topic}
            cardText="Here you can create a campaign where you can vote from a pool of topics/ideas."
            link="/add-topics-campaign"
          />
        </div>
        <div className="col">
        <HomeCard
            cardTitle="Candidates Campaign"
            img={candidate}
            cardText="Here you can create a campaign where you can vote for a person from a list."
            link="/add-candidates-campaign"
          />
        </div>
      </div>
    </div>
  );
}
