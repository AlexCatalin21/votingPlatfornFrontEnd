import React from "react";
import Card from "react-bootstrap/Card";
import topic from "../../resources/topic.png";
import candidate from "../../resources/candidate.png";
import HomeCard from "./HomeCard.js";

export default function Home() {
  return (
    <div className="container homePage">
      <div className="row homeContainer">
        <div className="col-sm-6">
          <h1 className="welcomeMessage">Welcome!</h1>
          <h3 className="homePageDescription">
            Have you ever been in a situation where you or your group of
            friends couldn't make a decision? Couldn't decide where you wanted
            to travel or what food to order for the evening? Are you the manager
            of a company and want to vote for employee of the month? On
            VotingPlat you can make all these decisions and more by creating
            voting campaigns and inviting only the people you want to vote in
            the campaign you create.
          </h3>
        </div>
        <div className="col-sm-3">
          <HomeCard
            cardTitle="Topic Campaign"
            img={topic}
            cardText="Here you can create a campaign where you can vote from a pool of topics/ideas."
            link="/add-topics-campaign"
          />
        </div>
        <div className="col-sm-3">
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
