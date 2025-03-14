import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskFilter, { FilterOption } from './components/TaskFilter';

// TypeScript interface for a Task object
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Initial task list
const initialState: Task[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Finish homework', completed: false },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialState);
  const [filter, setFilter] = useState<FilterOption>('all');

  const addTask = (title: string) => {
    const newTask: Task = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Tracker</h1>
      <AddTask addTask={addTask} />
      <TaskFilter currentFilter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
