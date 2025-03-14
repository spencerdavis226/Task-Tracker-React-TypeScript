import { useState } from 'react';

// Define TypeScript interface for component props
interface AddTaskProps {
  addTask: (title: string) => void;
}

// React Functional Component with typed props
const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return; // Blank title
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
