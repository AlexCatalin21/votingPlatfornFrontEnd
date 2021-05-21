import React from "react";
import VoteCandidate from '../service/VoteCandidate'

export default function Candidate(props) {
  return (
    <div className="candidateInfo">
      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <div>
        <label className="fieldLabel">Birthdate: </label>
        {props.birthDate}
      </div>
      <div>
        <label className="fieldLabel">Description: </label>
        {props.description}
      </div>
      <div>
        <label className="fieldLabel">Electoral speech:</label>"
        {props.electoralSpeech}"
      </div>
      <div>
        <label className="fieldLabel">Votes:</label>
        {props.noVotes}
      </div>
      <div>
        <VoteCandidate id={props.id} />
      </div>
    </div>
  );
}
