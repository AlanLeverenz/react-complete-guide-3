import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';

// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
