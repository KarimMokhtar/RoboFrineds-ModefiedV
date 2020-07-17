import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchField } from "../actions";

const App = () => {
  const [robotList, setRobotList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const searchField = useSelector((state) => state.searchRobots.searchField);
  const dispatch = useDispatch();

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
    dispatch(setSearchField(value));

    if (value.trim().length) {
      const searchedRobots = robotList.filter((robot) =>
        robot.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(searchedRobots);
    } else {
      setFilteredList(robotList);
    }
  };

  if (!robotList.length) return <h1>Loading...</h1>;
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={handleSearch} search={searchField} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredList} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
