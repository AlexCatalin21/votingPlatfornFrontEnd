import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";
export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  // create file to store the url
  const allCampaignsApi = "http://localhost:8080/api/v1/campaign/get-campaigns";

  useEffect(() => {
    axios.get(allCampaignsApi).then((res) => {
      setCampaigns(res.data);
      console.log(res);
    });
  }, [allCampaignsApi]);

  const formatDate = (date) => {
      return date.split("T")[0] + " " + date.split("T")[1].split(".")[0]
  }

  return (
    <div className = "container">
        <div className = "row">
      {campaigns.map((campaign, index) => {
        return (
          <div className = "col">
            <CampaignCard
              cardTitle={campaign.name}
              startDate={formatDate(campaign.startDate)}
              expireDate={formatDate(campaign.expireDate)}
              link= {`/campaign-detail/${campaign.id}`}
              id={campaign.id}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
}
