import React, { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

// () => describes the function and return type
// void means there are no parameters
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // set the concrete type for useRef
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? was added because the ref is not yet set to a value
    // ? signals to TS that it tries to get the value,
    // otherwise null will be stored
    // ! means the value will never be null
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // using context
    todosCtx.addTodo(enteredText);
  };

  // JSX code
  // could be a MouseEvent if using "onClick"
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
