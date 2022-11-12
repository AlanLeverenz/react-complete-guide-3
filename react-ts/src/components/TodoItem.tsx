import React from 'react';
import classes from './TodoItem.module.css';

// getting the onClick function through props
// use angle brackets to define the prop type for 'text'
// props has a children prop as a default

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
