// Reuse the Task interface from App.tsx by re-declaring or importing it.
// For simplicity, let's re-declare it here (or you can export it from App.tsx).
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define a Props interface to specify the data this component expects.
interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

// TaskList component receives an array of tasks and displays them
const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
