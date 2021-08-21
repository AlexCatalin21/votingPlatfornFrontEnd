import React,{useEffect,useState} from "react";
import VoteCandidate from '../service/VoteCandidate'
import Profile from '../../resources/profile.jpg'

export default function Candidate(props) {

  const [noVotes,setNoVotes] =  useState("")

  useEffect(() => {
    setNoVotes(props.noVotes)
    console.log(props.noVotes)
    }
  , [props.noVotes])


  return (
    // <div className="candidateInfo">
    //   <h4>
    //     {props.firstName} {props.lastName}
    //   </h4>
    //   <div>
    //     <label className="fieldLabel">Birthdate: </label>
    //     {props.birthDate}
    //   </div>
    //   <div>
    //     <label className="fieldLabel">Description: </label>
    //     {props.description}
    //   </div>
    //   <div>
    //     <label className="fieldLabel">Electoral speech:</label>"
    //     {props.electoralSpeech}"
    //   </div>
    //   <div>
    //     <label className="fieldLabel">Votes:</label>
    //     {props.noVotes}
    //   </div>
    //   <div>
    //     <VoteCandidate id={props.id} campaignId={props.campaignId} votePeriodCheck={props.votePeriodCheck}/>
    //   </div>
    // </div>
    <div class="profile-card">
  <div class="infos">
    <div class="img-border">
      <img src={Profile} alt="profile"></img>
    </div>  
    <h1 class="name">{props.firstName} {props.lastName}</h1>
  <h3 className="specialty">{props.birthDate}</h3>
  <h3 class="specialty">{props.birthdate} {props.description}</h3>
  <h3 class="specialty">"{props.electoralSpeech}"</h3>
    <div class="social-media">
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-github"></i>
      </a>
      <a href="#">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
    <VoteCandidate id={props.id} campaignId={props.campaignId} votePeriodCheck={props.votePeriodCheck}/>
  </div>
  
  <div class="stats">
    <div class="stat">
      <span class="stat-num">{props.noVotes}</span>
      <span class="stat-name">VOTES</span>
    </div>
  </div>
</div>

  );
}
