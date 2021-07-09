import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";
import SearchCampaign from "../service/SearchCampaign";
export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filterCampaigns = (campaigns, query) => {
    if (!query) {
      return campaigns;
    }

    return campaigns.filter((campaign) => {
      const campaignName = campaign.name.toLowerCase();
      return campaignName.includes(query);
    });
  };
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredCampaigns = filterCampaigns(campaigns, searchQuery);

  // create file to store the url
  const allCampaignsApi = "http://localhost:8080/api/v1/campaign/get-campaigns";

  useEffect(() => {
    axios.get(allCampaignsApi).then((res) => {
      setCampaigns(res.data);
      console.log(res);
    });
  }, [allCampaignsApi]);

  const formatDate = (date) => {
    return date.split("T")[0] + " " + date.split("T")[1].split(".")[0];
  };

  return (
    <div className="container">
      <div className="searchTab">
        <SearchCampaign
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="row">
        {filteredCampaigns.map((campaign, index) => {
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
