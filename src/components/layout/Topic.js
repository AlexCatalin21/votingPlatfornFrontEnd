import React from "react";
import VoteTopic from "../service/VoteTopic";

export default function Topic(props) {
  return (
    <div className="candidateInfo">
      <h4>
        {props.name}
      </h4>
      <div>
        <label className="fieldLabel"> Description:</label>
        {props.topicDescription}
      </div>
      <div>
        <label className="fieldLabel">Votes:</label>
        {props.noVotes}
      </div>
      <VoteTopic id={props.id}/>
    </div>
  );
}
