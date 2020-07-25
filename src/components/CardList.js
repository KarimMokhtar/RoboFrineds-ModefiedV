import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card email={robot.email} name={robot.name} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
