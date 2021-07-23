import React, {useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import topic from "../../resources/topic.png";
import candidate from "../../resources/candidate.png";
import HomeCard from "./HomeCard.js";

export default function Home() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem("userEmail")) {
      setUserIsLoggedIn(true);
    }
  }, []);

  


  const createCandidatesCampaign = () => {
    window.location.href="/add-candidates-campaign"
  }

  const createTopicCampaign = () => {
    window.location.href="/add-topics-campaign"
  }


  return (
    <div className="homePage">
      <div className=" welcomeDescription">
        <h1 className="welcomeMessage">Welcome!</h1>
        <h3 className="homePageDescription">
          <p>
            Have you ever been in a situation where you or your group of friends
            couldn't make a decision? Couldn't decide where you wanted to travel
            or what food to order for the evening?
          </p>
          <p>
            {" "}
            On VotingPlat you can make all these decisions and more by creating
            voting campaigns and inviting only the people you want to vote in
            the campaign you create.
          </p>
        </h3>
      </div>

      <div className="row createCampaigns">
        <div className="candidatesHome col-sm-5">
          <h1>Candidates</h1>
          <h4>
            Create your candidates campaign, start adding people to be voted and
            invite other users to vote!
          </h4>
          {userIsLoggedIn ? (<Button className="zoom" onClick={createCandidatesCampaign}>Create candidates campaign</Button>):(<div>You have to <a href="\login"> sign in </a> to create a campaign </div>)}
        </div>
        <div className="col-sm-2"></div>
        <div className="topicsHome col-sm-5">
          <h1>Topics</h1>
          <h4>
            Create your topics campaign, start adding topics to be voted and
            invite other users to vote!
          </h4>
          {userIsLoggedIn ? (<Button className="zoom" onClick={createTopicCampaign}>Create topics campaign</Button>):(<div>You have to <a href="\login"> sign in </a> to create a campaign </div>)}
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
