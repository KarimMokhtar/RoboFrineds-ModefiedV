import React, { useEffect } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import ErrorBoundry from "../components/ErrorBoundry";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadRobots();
  }
  filterRobots = () => {
    return this.props.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  };
  render() {
    const { isPending, searchField, robots, handleSearch } = this.props;
    if (isPending) return <h1>Loading...</h1>;
    let searchedRobots = [];
    if (searchField.trim().length) {
        searchedRobots = this.filterRobots();
    } else {
      searchedRobots = [...robots];
    }
    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={handleSearch} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={searchedRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
