import React, { useContext } from 'react';
import TodoItem from './TodoItem';
// import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

// COMMAND CLICK on FC
// using <> unlocks a feature that merges with children prop
// items is a Todo array; onRemoveTodo is a function that does not return a value
// bind preconfigures a function for future execution
// null is first object in the constructor (todo.ts)
// onRemoveTodo is not returning a todo, only removing it (null)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
