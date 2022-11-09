import React from 'react';

// use angle brackets to define the prop type for 'text'
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
