import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";

export default function MyCampaigns() {
  const [myCampaigns, setMyCampaigns] = useState([]);
  const userID = window.sessionStorage.getItem("userId");

  const myBookingsApi = `http://localhost:8080/api/v1/campaign/get-campaigns/${userID}`;

  useEffect(() => {
    axios.get(myBookingsApi).then((res) => {
      setMyCampaigns(res.data);
      console.log(res);
    });
  }, [myBookingsApi]);

  const formatDate = (date) => {
    return date.split("T")[0] + " " + date.split("T")[1].split(".")[0];
  };

  return (
    <div className="container">
      <div className="row">
        {myCampaigns.map((campaign, index) => {
          return (
            <div className="col">
              <CampaignCard
                cardTitle={campaign.name}
                startDate={formatDate(campaign.startDate)}
                expireDate={formatDate(campaign.expireDate)}
                link={`/campaign-detail/${campaign.id}`}
                id={campaign.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
