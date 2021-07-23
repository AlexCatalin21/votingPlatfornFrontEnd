import React, { useState, useEffect } from "react";
import Candidate from "./Candidate";
import Topic from "./Topic";
import Winner from "./Winner";

export default function Campaign(props) {
  const [campaign, setCampaign] = useState("");
  const [voters, setVoters] = useState([]);
  const [campaignType, setCampaignType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [candidatesList, setCandidatesList] = useState([]);
  const [topicsList, setTopicsList] = useState([]);
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [ownerId, setOwnerId] = useState("");

  const loggedInUserId = window.sessionStorage.getItem("userId")
  const campaignId = props.location.pathname.split("/")[2];
  const campaignApi = `http://localhost:8080/api/v1/campaign/get-campaign/${campaignId}`;

  const votePeriodCheck = (startDate, expireDate) => {
    if (
      Date.now() < Date.parse(startDate) ||
      Date.now() > Date.parse(expireDate)
    ) {
      return <div className="periodErrorMessage">Out of voting period!</div>;
    }
    return "Accept";
  };

  const checkWinnerTime = (expireDate) => {
    if(Date.now() > Date.parse(expireDate)){
      return <Winner campaignId={campaignId}></Winner>
    }
  }


  useEffect(() => {
    async function fetchData() {
      let response = await fetch(campaignApi);
      let data = await response.json();
      if (response.ok) {
        setCampaign(data);
        setStartDate(
          data.startDate.split("T")[0] +
            " " +
            data.startDate.split("T")[1].split(".")[0]
        );
        setExpireDate(
          data.expireDate.split("T")[0] +
            " " +
            data.expireDate.split("T")[1].split(".")[0]
        );
        setCandidatesList(data.candidates);
        setTopicsList(data.topics);
        setCampaignType(data.type.type);
        setOwnerFirstName(data.ownerUser.firstName);
        setOwnerLastName(data.ownerUser.lastName);
        setOwnerId(data.ownerUser.id);
        setVoters(data.voters);
        console.log(data)
      } else {
        console.log("Fail");
      }
    }
    fetchData();
  }, [campaignApi]);

  const displayVoters = (userId,ownerId,voters) => {
    if(userId === ownerId){
      <div>
        {voters.map((voter) => {
          return voter.email;
        })}</div>
    }
    else{
      <div>You must be the owner of campaign to see the voters!</div>
    }
  }

  return (
    <div className="container campaignPage">
      <h3>{campaign.name}</h3>
      <div>
        Start: {startDate} {"-"} End: {expireDate}
      </div>
      <div>{votePeriodCheck(startDate, expireDate)}</div>
      <div>
        Created by {ownerFirstName} {ownerLastName}{" "}
      </div>
      <div className="campaignDescription">{campaign.description}</div>
      {checkWinnerTime(expireDate)}
      
      <div className="campaignCandidates">
        
        {campaignType === "Candidate" ? (
          <div>
            {candidatesList.map((candidate, index) => {
              return (
                <Candidate
                  firstName={candidate.firstName}
                  lastName={candidate.lastName}
                  birthDate={candidate.birthDate.split("T")[0]}
                  description={candidate.description}
                  electoralSpeech={candidate.electoralSpeech}
                  noVotes={candidate.noVotes}
                  id={candidate.id}
                  campaignId={campaignId}
                  votePeriodCheck={votePeriodCheck(startDate, expireDate)}
                />
              );
            })}
          </div>
        ) : (
          <div>
            {topicsList.map((topic, index) => {
              return (
                <Topic
                  name={topic.name}
                  topicDescription={topic.description}
                  id={topic.id}
                  noVotes={topic.noVotes}
                  campaignId={campaignId}
                  votePeriodCheck={votePeriodCheck(startDate, expireDate)}
                />
              );
            })}
          </div>
        )}
      </div>
      <div>
        Voters:
        {loggedInUserId === ownerId ? (<div>
        {voters.map((voter) => {
          return voter.email;
        })}</div>):(<div>You must be the owner of campaign to see the voters!</div>)}
        
      </div>
    </div>
  );
}
