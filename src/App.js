import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [robotList, setRobotList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setFilteredList(res);
        setRobotList(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    if (value.trim().length !== 0) {
      const searchedRobots = robotList.filter((robot) =>
        robot.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredList(searchedRobots);
    } else {
      setFilteredList(robotList);
    }
  };

  if (robotList.length === 0) return <h1>Loading...</h1>;
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={handleSearch} search={search} />
      <Scroll>
        <CardList robots={filteredList} />
      </Scroll>
    </div>
  );
};

export default App;
