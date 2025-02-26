/**
 * This component displays a list of tasks. It receives data (an array of tasks)
 * and functions (to toggle task completion and delete tasks) as props from its parent.
 *
 * Key TSX/TypeScript Concepts Covered:
 * - Interfaces: Define the shape of objects and props.
 * - React.FC: Typing a functional component.
 * - Props Destructuring: Extracting properties directly from the props object.
 * - JSX: Writing HTML-like syntax in TypeScript.
 */

// Define a TypeScript interface to represent a single Task.
// Interfaces ensure that every task object has the correct structure.
interface Task {
  id: number; // Unique identifier for the task
  title: string; // Text or description of the task
  completed: boolean; // Boolean indicating whether the task is done
}

// Define an interface for the component's props.
// This acts as a contract to guarantee that the correct data is passed from the parent.
interface TaskListProps {
  tasks: Task[]; // An array of Task objects to display
  toggleTask: (id: number) => void; // A function to toggle a task's completion status
  deleteTask: (id: number) => void; // A function to delete a task
}

// Define the TaskList component as a React Functional Component (React.FC)
// with the props type specified by TaskListProps.
const TaskList: React.FC<TaskListProps> = ({
  tasks, // Destructure the 'tasks' prop, which is an array of Task objects
  toggleTask, // Destructure the 'toggleTask' function prop
  deleteTask, // Destructure the 'deleteTask' function prop
}) => {
  // Return the JSX that defines how the list of tasks is displayed.
  // JSX lets us write HTML-like code that is then transformed into JavaScript.
  return (
    <ul>
      {/* Map over each task in the tasks array to render an <li> for each */}
      {tasks.map((task) => (
        <li
          key={task.id} // Unique key for each list item to help React manage re-rendering
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} // Inline styles for layout
        >
          {/* Checkbox to toggle task completion.
              Its checked state is bound to the task.completed property,
              and clicking it calls the toggleTask function with the task's id. */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {/* Display the task title. If the task is completed, apply a line-through style. */}
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </span>
          {/* Delete button to remove the task.
              Clicking it calls the deleteTask function with the task's id. */}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// Export the TaskList component as the default export so it can be imported and used in other files.
export default TaskList;
