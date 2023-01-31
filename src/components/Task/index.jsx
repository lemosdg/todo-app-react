import iconCross from "../../assets/icon-cross.svg";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { updateTask } from "../../services/updateTask";
import { ButtonDone } from "../ButtonDone";
import "./index.css";

export const Task = ({ id, description, done }) => {
  const { refresTasks } = useRefreshTasks();

  const updateTaskState = async () => {
    const response = await updateTask({ done: !done, id });
    if (response.id > 0) {
      refresTasks();
    }
  };

  const removeTask = async () => {
    const response = await deleteTask({ id });
    if (response.ok) {
      refresTasks();
    }
  };

  return (
    <div className="task">
      <section className="task_wrapper">
        <ButtonDone done={done} onClick={updateTaskState} />

        <p
          className={
            done ? "task_description task_description_done" : "task_description"
          }
        >
          {description}
        </p>
      </section>

      <button className="task_button" onClick={removeTask}>
        <img
          className="task_button_img"
          src={iconCross}
          alt="Delete this task"
        />
      </button>
    </div>
  );
};
