import React, { useState, useEffect } from "react";
import Candidate from "./Candidate";
import Topic from "./Topic";

export default function Campaign(props) {
  const [campaign, setCampaign] = useState("");
  const [campaignType, setCampaignType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [candidatesList, setCandidatesList] = useState([]);
  const [topicsList, setTopicsList] = useState([]);
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");

  const campaignId = props.location.pathname.split("/")[2];
  const campaignApi = `http://localhost:8080/api/v1/campaign/get-campaign/${campaignId}`;

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
        console.log(data);
        console.log(data.topics);
      } else {
        console.log("Fail");
      }
    }
    fetchData();
  }, [campaignApi]);

  return (
    <div className="container">
      <h3>{campaign.name}</h3>
      <div>
        Start: {startDate} {"-"} End: {expireDate}
      </div>
      <div>
        Created by {ownerFirstName} {ownerLastName}{" "}
      </div>
      <div className="campaignDescription">{campaign.description}</div>
      <div className="campaignCandidates">
        {campaignType === "Candidate" ? (
          <div>
            {candidatesList.map((candidate, index) => {
              return (
                <Candidate
                  firstName={candidate.first_name}
                  lastName={candidate.last_name}
                  birthDate={candidate.birth_date.split("T")[0]}
                  description={candidate.description}
                  electoralSpeech={candidate.electoralSpeech}
                  noVotes={candidate.noVotes}
                  id={candidate.id}
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
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
