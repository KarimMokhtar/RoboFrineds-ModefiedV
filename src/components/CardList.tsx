import React from 'react';
import Card from './Card';

interface ICardList {
  robots: Array<any>;
}
const CardList: React.FC<ICardList> = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card email={robot.email} name={robot.name} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
