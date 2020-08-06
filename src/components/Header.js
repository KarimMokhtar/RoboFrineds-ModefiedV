import React from 'react';
import CounterButton from './CounterButton';

const Header = React.memo(() => {
  console.log('header');

  return (
    <>
      <h1 className="f1">RoboFriends</h1>
      <CounterButton color={'red'} />
    </>
  );
});

export default Header;
