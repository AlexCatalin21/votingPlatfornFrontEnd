import React, { useState, useEffect } from "react";
import axios from "axios";
import WinnerLogo from "../../resources/winner.png";

export default function Winner(props) {
  const [winner, setWinner] = useState(null);

  const winnerAPI = `http://localhost:8080/api/v1/campaign/winner/${props.campaignId}`;

  useEffect(() => {
    axios.get(winnerAPI).then((res) => {
      setWinner(res.data);
      console.log(res);
    });
  }, [winnerAPI]);
  return (
    <div>
      <p>
        <img src={WinnerLogo} alt="winner" style={logoStyle} />
        <h3>The winner is</h3>
      </p>
    </div>
  );
}

const logoStyle = {
  width: "10%",
  height: "5%",
};
