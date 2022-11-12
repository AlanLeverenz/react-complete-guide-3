import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop
// items is a Todo array; onRemoveTodo is a function that does not return a value
// use bind preconfigures a function for future execution
// null is first object in the constructor (todo.ts)
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
