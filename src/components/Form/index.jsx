import { useState } from "react";

import { ButtonDone } from "../ButtonDone";

import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { useScheme } from "../../hooks/useScheme";
import { createTask } from "../../services/createTask";
import "./index.css";

export const Form = () => {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  // custom hooks
  const { refresTasks } = useRefreshTasks();
  const { scheme } = useScheme();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (description.trim().length > 0) {
      const response = await createTask({ description, done: isDone });

      if (response.id !== undefined) {
        setDescription("");
        setIsDone(false);
        refresTasks();
      }
    }
  };

  const handleChangeIsDone = () => {
    setIsDone(!isDone);
  };

  return (
    <form onSubmit={onSubmit} className={`form ${scheme}`}>
      <ButtonDone done={isDone} onClick={handleChangeIsDone} />

      <input
        type="text"
        value={description}
        name="description"
        placeholder="Crete a new todo..."
        className={`form_input ${scheme}`}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </form>
  );
};
