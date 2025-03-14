export type FilterOption = 'all' | 'active' | 'completed';

interface TaskFilterProps {
  currentFilter: FilterOption;
  setFilter: (filter: FilterOption) => void;
}

// React Functional Component with typed props
const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, setFilter }) => {
  return (
    <div>
      <button type="button" onClick={() => setFilter('all')} disabled={currentFilter === 'all'}>
        All
      </button>
      <button type="button" onClick={() => setFilter('active')} disabled={currentFilter === 'active'}>
        Active
      </button>
      <button type="button" onClick={() => setFilter('completed')} disabled={currentFilter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
