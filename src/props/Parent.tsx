import React from 'react';
import { Child, ChildWithDest, ChildAsFC } from './Child';

const Parent = () => {
  const handleClick = () => {
    alert('clicked!');
  };

  return (
    <>
      <Child color="red" onClick={handleClick} />
      <ChildWithDest color="green" onClick={handleClick} />
      <ChildAsFC color="purple" onClick={handleClick}>this is children</ChildAsFC>
    </>
  );
};

export default Parent;