import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

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

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Simple ID assignment
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
