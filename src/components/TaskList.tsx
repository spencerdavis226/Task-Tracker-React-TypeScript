// Define TypeScript interfaces for Task and component props
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

// React Functional Component with typed props
const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
