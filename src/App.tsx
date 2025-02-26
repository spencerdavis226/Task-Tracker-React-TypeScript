// Note: AI comments were added to help understand TSX concepts upon revisit.

// Importing necessary hooks and components from React and local files
import { useState } from 'react'; // useState is a React hook for managing state in functional components
import './App.css'; // Importing CSS for styling
import TaskList from './components/TaskList'; // Component to display the list of tasks
import AddTask from './components/AddTask'; // Component to add a new task
import TaskFilter, { FilterOption } from './components/TaskFilter'; // Component to filter tasks, along with its type

// TSX: TypeScript with JSX (a syntax extension for JavaScript that lets you write HTML-like code within JS)
// Here we define an interface which is a TypeScript construct that defines the shape of an object.
// This interface represents a Task with three properties: id, title, and completed.
interface Task {
  id: number; // Unique identifier for the task
  title: string; // The description or title of the task
  completed: boolean; // A flag indicating whether the task is completed or not
}

// initialState is an array of tasks, with type Task[] (an array where each element must follow the Task interface)
const initialState: Task[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Finish homework', completed: false },
];

// Main component for the application
function App() {
  // useState hook to create and manage the tasks state variable.
  // TypeScript enforces that tasks is an array of Task objects.
  const [tasks, setTasks] = useState<Task[]>(initialState);

  // useState for managing the current filter. FilterOption is a custom type imported from TaskFilter.
  // 'all' means no filtering; show all tasks.
  const [filter, setFilter] = useState<FilterOption>('all');

  // Function to add a new task.
  // It accepts a title as a parameter, creates a new task object, and then updates the tasks state.
  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Simple ID assignment (in production, consider a more robust approach)
      title, // Using ES6 shorthand to set the title property
      completed: false, // New tasks are not completed by default
    };
    // Update the tasks state with the new task appended to the existing list.
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task.
  // It receives the task's id, and uses array.map to create a new array with the updated task.
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    // Update state with the modified tasks array.
    setTasks(updatedTasks);
  };

  // Filter the tasks based on the current filter state.
  // If filter is 'active', only show tasks that are not completed.
  // If filter is 'completed', only show tasks that are completed.
  // Otherwise, show all tasks.
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  // Function to delete a task by its id.
  // It filters out the task from the tasks array and updates the state.
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // The return statement contains the JSX.
  // JSX is a syntax extension that looks similar to HTML and is used to describe the UI.
  // This code will be compiled to standard JavaScript by tools like Vite.
  return (
    <div>
      {/* Main heading of the app */}
      <h1>Task Tracker</h1>

      {/* AddTask component: Passes the addTask function as a prop so the child can add tasks */}
      <AddTask addTask={addTask} />

      {/* TaskFilter component: Passes down the current filter and the function to update it */}
      <TaskFilter currentFilter={filter} setFilter={setFilter} />

      {/* TaskList component: Receives the filtered list of tasks and functions to toggle and delete tasks */}
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

// Export the App component as the default export of this module so it can be imported elsewhere
export default App;
