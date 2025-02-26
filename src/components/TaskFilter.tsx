/**
 * This component renders a set of filter buttons that allow the user
 * to filter tasks based on their status: "all", "active", or "completed".
 *
 * Key Concepts:
 * - TypeScript's "export type" is used to create a union type for filter options.
 * - Interfaces define the shape of props for the component, ensuring type safety.
 * - React.FC (Function Component) is used along with generics to type the component.
 * - Props are destructured in the function parameter list for concise code.
 * - The "type" attribute on buttons ensures they don't act as form submitters.
 */

export type FilterOption = 'all' | 'active' | 'completed';
// This custom type restricts filter values to 'all', 'active', or 'completed'.
// It helps ensure only valid filter values are used throughout the app.

interface TaskFilterProps {
  // This interface defines the shape of props that TaskFilter expects.
  // currentFilter: holds the current filter value.
  currentFilter: FilterOption;
  // setFilter: a function that updates the filter value.
  // It accepts a FilterOption and returns nothing (void).
  setFilter: (filter: FilterOption) => void;
}

// Define the TaskFilter component as a React Function Component (React.FC)
// with the props type specified by TaskFilterProps.
const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter, // Destructure currentFilter from props
  setFilter, // Destructure setFilter function from props
}) => {
  return (
    <div>
      {/* 
        Each button is explicitly given type="button" to prevent it from acting
        as a submit button when placed within a form. The onClick handler updates
        the filter state in the parent component using setFilter.
      */}
      <button
        type="button"
        onClick={() => setFilter('all')}
        disabled={currentFilter === 'all'} // Disable if already the active filter
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setFilter('active')}
        disabled={currentFilter === 'active'} // Disable if already the active filter
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => setFilter('completed')}
        disabled={currentFilter === 'completed'} // Disable if already the active filter
      >
        Completed
      </button>
    </div>
  );
};

// Export the TaskFilter component as the default export so it can be imported elsewhere.
export default TaskFilter;
