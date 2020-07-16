import React from "react";
import Card from "./Card";

const CardList = ({ robots, search }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card robot={robot} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
