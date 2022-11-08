import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  // uses todos as a prop to use in Todos

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
