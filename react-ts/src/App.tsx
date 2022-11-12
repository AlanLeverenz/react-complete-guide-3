import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  // Todo is the Typescript type, an array
  const [todos, setTodos] = useState<Todo[]>([]);
  // uses todos as a prop to use in Todos

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // function is just a prop to be passed down
  /// the returned array includes items not matching the id
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // onAddTodo is defined in NewTodo as a prop.
  // App uses it to pass addTodoHandler to the component NewTodo.
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
