import React from "react";
import Card from "react-bootstrap/Card";
import topic from "../../resources/topic.png";
import candidate from "../../resources/candidate.png";
import HomeCard from "./HomeCard.js";

export default function Home() {
  return (
    <div className="homePage">
      <div className="col-sm-6 welcomeDescription">
        <h1 className="welcomeMessage">Welcome!</h1>
        <h3 className="homePageDescription">
          <p>
            Have you ever been in a situation where you or your group of friends
            couldn't make a decision? Couldn't decide where you wanted to travel
            or what food to order for the evening?
          </p>
          <p>
            {" "}
            Are you the manager of a company and want to vote for employee of
            the month?
          </p>
          <p>
            {" "}
            On VotingPlat you can make all these decisions and more by creating
            voting campaigns and inviting only the people you want to vote in
            the campaign you create.
          </p>
        </h3>
      </div>
      <div className="col-sm-6 createCampaigns">
        <h1 className="createCamapignsTitle">Start making decisions now!</h1>
        <div className="createCampaignDescription">
          <div>
            Create your candidates campaign, start adding peoples to be voted
            and invite other users to vote!
          </div>
          <div className="zoom">
            <a href="/add-candidates-campaign" >
              Create candidates campaign
            </a>
          </div>
          <h2>OR</h2>
          <div>
            Create your topics campaign, start adding topics to be voted and
            invite other users to vote!
          </div>
          <div className="zoom">
            <a href="/add-topics-campaign">Create topics campaign</a>
          </div>
        </div>
      </div>

      {/* <div className="col-sm-3">
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
        </div> */}
    </div>
  );
}
