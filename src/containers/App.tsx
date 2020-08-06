import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {AppState} from '../redux/reducers/rootReducer'
import {setSearchField} from '../redux/actions/searchActions';
import {requestRobots} from '../redux/actions/requestActions';
import MainPage from "../components/MainPage";

interface IAppProps{

}

const App:React.FC<IAppProps> = () => {
  const searchField = useSelector((state:AppState) => state.searchRobots.searchField);
  const { robots, isPending } = useSelector((state:AppState) => state.requestRobots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(async () => {
    await dispatch(requestRobots());
  }, [dispatch]);

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
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
