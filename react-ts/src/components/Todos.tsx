import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop
// items is a Todo array; onRemoveTodo is a function that does not return a value

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
