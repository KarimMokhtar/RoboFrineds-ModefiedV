import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [robotList, setRobotList] = useState(robots);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    if (value.trim().length !== 0) {
      const searchedRobots = robotList.filter((robot) =>
        robot.name.toLowerCase().includes(value.toLowerCase())
      );

      setRobotList(searchedRobots);
    } else {
      setRobotList(robots);
    }
  };
  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox onSearchChange={handleSearch} search={search} />
      <CardList robots={robotList} />
    </div>
  );
};

export default App;
