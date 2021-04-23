import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CampaignList() {

    const [campaigns,setCampaigns] = useState([]);


    // create file to store the url
    const allCampaignsApi = "http://localhost:8080/api/v1/campaign/get-campaigns"

    useEffect(() => {
        axios.get(allCampaignsApi).then((res) => {
          setCampaigns(res.data);
          console.log(res);
        });
      }, [allCampaignsApi]);

    return (
        <div>
            {campaigns.map((campaign,index) => {
                return(<div>
                    {campaign.name}
                </div>)
            })}
        </div>
    )
}
