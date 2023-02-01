import { useState } from "react";

import { ButtonDone } from "../ButtonDone";
import { ButtonRemove } from "../ButtonRemove";

import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { updateTask } from "../../services/updateTask";
import { deleteTask } from "../../services/deleteTask";
import "./index.css";

export const Task = ({ id, description, done }) => {
  const [showBtnRemove, setShowBtnRemove] = useState(false);
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

  const onMouseOver = () => {
    setShowBtnRemove(true);
  };

  const onMouseLeave = () => {
    setShowBtnRemove(false);
  };

  return (
    <div className="task" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
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

      {showBtnRemove && <ButtonRemove onClick={removeTask} />}
    </div>
  );
};
