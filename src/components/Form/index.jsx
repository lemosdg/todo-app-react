import { useState } from "react";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { createTask } from "../../services/createTask";

export const Form = () => {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  const { refresTasks } = useRefreshTasks();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (description.trim().length > 0) {
      const response = await createTask({ description, done: isDone });

      if (response.id !== undefined) {
        refresTasks();
        setDescription("");
        setIsDone(false);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="checkbox"
        value={isDone}
        checked={isDone}
        name="isDone"
        onChange={(e) => setIsDone(e.target.checked)}
      />
      <input
        type="text"
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};
