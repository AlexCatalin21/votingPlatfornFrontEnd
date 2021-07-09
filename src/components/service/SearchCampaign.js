import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SearchCampaign({ searchQuery, setSearchQuery }) {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };
  return (
    <div>
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <span className="visually-hidden">Search campaign</span>
        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search campaign"
          name="s"
        />
        <Button className="accessButton" type="submit" variant="primary">Search</Button>
      </form>
    </div>
  );
}


