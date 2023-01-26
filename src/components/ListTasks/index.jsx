import { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateTask } from "../../services/updateTask";
import { deleteTask } from "../../services/deleteTask";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";

export const ListTasks = () => {
  const { refresTasks } = useRefreshTasks();
  // Redux
  const tasks = useSelector((state) => state.tasks.value);

  useEffect(() => {
    refresTasks();
  }, []);

  const updateTaskState = async ({ done, id }) => {
    const response = await updateTask({ done: !done, id });
    if (response.id > 0) {
      refresTasks();
    }
  };

  const removeTask = async ({ id }) => {
    const response = await deleteTask({ id });
    if (response.ok) {
      refresTasks();
    }
  };

  return (
    <ul>
      {tasks?.map(({ id, description, done }) => (
        <li key={id}>
          <p>{description}</p>
          <button onClick={() => updateTaskState({ done, id })}>
            {done ? "completed" : "done"}
          </button>
          <button onClick={() => removeTask({ id })}>x</button>
        </li>
      ))}
    </ul>
  );
};
