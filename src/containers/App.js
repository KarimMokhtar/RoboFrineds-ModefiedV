import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

const App = () => {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const { robots, isPending } = useSelector((state) => state.requestRobots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(async () => {
    await dispatch(requestRobots());
  }, [dispatch]);

  const handleSearch = (event) => {
    const value = event.target.value;
    dispatch(setSearchField(value));
  };
  return (
    <MainPage
      searchField={searchField}
      isPending={isPending}
      robots={robots}
      handleSearch={handleSearch}
      loadRobots={loadRobots}
    />
  );
};

export default App;
