import { useState } from "react";

import { ButtonDone } from "../ButtonDone";
import { ButtonRemove } from "../ButtonRemove";

import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { useScheme } from "../../hooks/useScheme";
import { updateTask } from "../../services/updateTask";
import { deleteTask } from "../../services/deleteTask";
import "./index.css";

export const Task = ({ id, description, done }) => {
  const [showBtnRemove, setShowBtnRemove] = useState(false);
  // Custom hooks
  const { refresTasks } = useRefreshTasks();
  const { scheme } = useScheme();

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
    <div
      className={`task ${scheme}`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <section className={`task_wrapper ${scheme}`}>
        <ButtonDone done={done} onClick={updateTaskState} />

        <p
          className={
            done
              ? `task_description task_description_done ${scheme}`
              : `task_description ${scheme}`
          }
        >
          {description}
        </p>
      </section>

      {showBtnRemove && <ButtonRemove onClick={removeTask} />}
    </div>
  );
};
