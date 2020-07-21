import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from '../components/Header';
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const App = () => {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const { robots, isPending } = useSelector((state) => state.requestRobots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(async () => {
    await dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const handleSearch = (event) => {
    const value = event.target.value;
    dispatch(setSearchField(value));
  };
  if (isPending) return <h1>Loading...</h1>;

  let searchedRobots = [];
  if (searchField.trim().length) {
    searchedRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  } else {
    searchedRobots = [...robots];
  }
  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={handleSearch} search={searchField} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={searchedRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
