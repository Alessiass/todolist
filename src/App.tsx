import './App.css';
import { TodoList } from './components/TodoList';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TaskList />
    </div>
  );
}

export default App;
