import { useCleaner } from "../../hooks/useCleaner";
import "./index.css";

export const ButtonClear = () => {
  const { isCleaning, clearTasks } = useCleaner();

  return (
    <button
      onClick={clearTasks}
      className={isCleaning ? "buttonClear not_allowed" : "buttonClear"}
      disabled={isCleaning}
    >
      {isCleaning ? "Cleaning" : "Clear Completed"}
    </button>
  );
};
