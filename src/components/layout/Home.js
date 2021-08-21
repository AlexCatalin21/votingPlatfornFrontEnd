import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import topic from "../../resources/topic.png";
import candidate from "../../resources/candidates.jpg";
import HomeCard from "./HomeCard.js";

export default function Home() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("userEmail")) {
      setUserIsLoggedIn(true);
    }
  }, []);

  const createCandidatesCampaign = () => {
    window.location.href = "/add-candidates-campaign";
  };

  const createTopicCampaign = () => {
    window.location.href = "/add-topics-campaign";
  };

  return (
    <div className="homePage">
      <div className=" welcomeDescription">
        <h1 className="welcomeMessage">Welcome!</h1>
        <h3 className="homePageDescription">
          <p>VotingPlat is all you need to make your decisions!</p>
        </h3>
      </div>

      {/* <div className="row createCampaigns">
        <div className="candidatesHome col-sm-5">
          <h1>Candidates</h1>
          <h4>
            Create your candidates campaign, start adding people to be voted and
            invite other users to vote!
          </h4>
          {userIsLoggedIn ? (
            <Button variant="warning" className="zoom" onClick={createCandidatesCampaign}>
              Create candidates campaign
            </Button>
          ) : (
            <div>
              You have to <a href="\login"> sign in </a> to create a campaign{" "}
            </div>
          )}
        </div>
        <div className="col-sm-2"></div>
        <div className="topicsHome col-sm-5">
          <h1>Topics</h1>
          <h4>
            Create your topics campaign, start adding topics to be voted and
            invite other users to vote!
          </h4>
          {userIsLoggedIn ? (
            <Button
              variant="warning"
              className="zoom"
              onClick={createTopicCampaign}
            >
              Create topics campaign
            </Button>
          ) : (
            <div>
              You have to <a href="\login"> sign in </a> to create a campaign{" "}
            </div>
          )}
        </div>
      </div> */}
      <div className="row createCampaigns">
        <div class="flip col-sm-5">
          <div
            class="front firstflip"
            // style={{backgroundImage: URL("/home/alex/Documents/JAVA-ADVANCED/voting-platform/vp-front-end/vpfrontend/src/resources/candidates.jpg")}}
          >
            <h1 class="text-shadow">CREATE CANDIDATES CAMPAIGN</h1>
          </div>
          <div class="back">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
            {userIsLoggedIn ? (
              <Button
                variant="warning"
                onClick={createCandidatesCampaign}
              >
                Create candidates campaign
              </Button>
            ) : (
              <div>
                You have to <a href="\login"> sign in </a> to create a campaign{" "}
              </div>
            )}
          </div>
        </div>
        <div className="emptySpace col-sm-1"></div>
        <div class="flip col-sm-5">
          <div
            class="front 2ndflip"
            // style="background-image: url(/home/alex/Documents/JAVA-ADVANCED/voting-platform/vp-front-end/vpfrontend/src/resources/candidates.jpg)"
          >
            <h1 class="text-shadow">CREATE TOPICS CAMPAIGN</h1>
          </div>
          <div class="back">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
            {userIsLoggedIn ? (
              <Button
                variant="warning"
                onClick={createTopicCampaign}
              >
                Create topics campaign
              </Button>
            ) : (
              <div>
                You have to <a href="\login"> sign in </a> to create a campaign{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
