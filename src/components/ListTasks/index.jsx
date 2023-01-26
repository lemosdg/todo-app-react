import { useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteTask } from "../../services/deleteTask";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import "./index.css";
import { Task } from "../Task";

export const ListTasks = () => {
  const { refresTasks } = useRefreshTasks();
  // Redux
  const tasks = useSelector((state) => state.tasks.value);

  useEffect(() => {
    refresTasks();
  }, []);

  const removeTask = async ({ id }) => {
    const response = await deleteTask({ id });
    if (response.ok) {
      refresTasks();
    }
  };

  return (
    <section className="listTasks">
      <ul className="listTasks_wrapper">
        {tasks?.map(({ id, description, done }) => (
          <Task
            key={id}
            id={id}
            description={description}
            done={done}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </section>
  );
};
