import { useScheme } from "../../hooks/useScheme";
import "./index.css";

export const FilterTasksButton = ({ status, displayText, onClick }) => {
  // Custom hooks
  const { scheme } = useScheme();

  return (
    <button
      onClick={onClick}
      className={
        status
          ? `filter_tasks_button button_active ${scheme}`
          : `filter_tasks_button ${scheme}`
      }
    >
      {displayText}
    </button>
  );
};
