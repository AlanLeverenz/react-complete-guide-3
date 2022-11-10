import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
