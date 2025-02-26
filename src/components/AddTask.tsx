/**
 * This component renders a form for adding a new task.
 * It uses TSX (TypeScript with JSX) which combines TypeScript’s static type-checking
 * with JSX syntax, allowing you to write HTML-like code within your TypeScript files.
 *
 * Key concepts demonstrated:
 * - TypeScript interfaces for defining the shape of props.
 * - The useState hook for managing local component state.
 * - Handling form events with strong type annotations.
 * - JSX for describing the UI.
 */

import { useState } from 'react'; // Import the useState hook from React for local state management

// Define an interface for the component's props.
// This interface acts as a contract, ensuring that the component receives props of the specified type.
interface AddTaskProps {
  // The addTask prop is a function that accepts a string (the new task title)
  // and returns void (i.e., it doesn't return any value).
  addTask: (title: string) => void;
}

// Define the AddTask component using React.FC (Function Component).
// React.FC is a generic type that allows you to define the props type for your component.
const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  // Destructure the addTask function from props.
  // This means you can use 'addTask' directly instead of referencing props.addTask.

  // Create a state variable called 'title' to store the current input value.
  // setTitle is the function to update the state.
  // Since the initial value is an empty string, TypeScript infers that 'title' is of type string.
  const [title, setTitle] = useState('');

  // Define a function to handle form submission.
  // We explicitly type the event 'e' as React.FormEvent<HTMLFormElement> for proper type checking.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior which reloads the page.

    // Check if the input is not empty after trimming whitespace.
    if (!title.trim()) return;

    // Call the addTask function (received via props) to add the new task.
    addTask(title);

    // Clear the input field by resetting the title state to an empty string.
    setTitle('');
  };

  // Return the JSX that defines the component's UI.
  // The form uses the handleSubmit function to handle submissions.
  // The input field is bound to the title state and updates it on every change.
  // The button is of type "submit" so that clicking it triggers the form submission.
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // Standard HTML input element of type "text".
        placeholder="Enter a new task" // Placeholder text displayed in the input field.
        value={title} // Bind the input's value to the 'title' state variable.
        onChange={(e) => setTitle(e.target.value)} // Update the 'title' state on input change.
      />
      <button type="submit">Add Task</button> // Button to submit the form,
      triggering handleSubmit.
    </form>
  );
};

// Export the AddTask component as the default export so it can be imported and used in other parts of the application.
export default AddTask;
