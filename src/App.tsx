import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

// Define the Task interface
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Task[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Finish homework', completed: false },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialState);

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
