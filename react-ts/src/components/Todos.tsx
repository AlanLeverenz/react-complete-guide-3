import React from 'react';

import Todo from '../models/todo';

// @types/react
// FC generic type
// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
