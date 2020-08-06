import React from 'react';

export interface ICard {
  name: string;
  email: string;
}
const Card: React.FC<ICard> = ({ name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}?size=200x200`} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
