import { useState } from "react";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { createTask } from "../../services/createTask";
import { ButtonDone } from "../ButtonDone";
import "./index.css";

export const Form = () => {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  const { refresTasks } = useRefreshTasks();

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
    if (isDone) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <ButtonDone done={isDone} onClick={handleChangeIsDone} />

      <input
        type="text"
        value={description}
        name="description"
        placeholder="Crete a new todo..."
        className="form_input"
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};
