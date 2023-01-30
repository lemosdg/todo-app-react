import "./index.css";

export const FilterTasksButton = ({ status, displayText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        status ? "filter_tasks_button button_active" : "filter_tasks_button"
      }
    >
      {displayText}
    </button>
  );
};
