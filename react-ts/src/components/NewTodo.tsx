import React from 'react';
import { useRef } from 'react';

const NewTodo = () => {
  // set the concrete type for useRef
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? was added because the ref is not yet set to a value yet
    // ? signals to TS that it tries to get the value,
    // otherwise null will be stored
    // ! means the value will never be null
    const enteredText = todoTextInputRef.current!.value;
  };

  // JSX code
  // could be a MouseEvent if using "onClick"
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
