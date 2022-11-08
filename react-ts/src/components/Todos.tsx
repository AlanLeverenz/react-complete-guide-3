import React from 'react';

// @types/react
// FC generic type
// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
