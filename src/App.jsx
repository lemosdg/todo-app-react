import { useEffect, useState } from "react";
import { getTasks } from "./services/getTasks";
import { updateTask } from "./services/updateTask";
import { deleteTask } from "./services/deleteTask";
import { createTask } from "./services/createTask";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "./features/tasks/tasksSlice";

function App() {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  // Redux
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTasks();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (description.trim().length > 0) {
      const response = await createTask({ description, done: isDone });

      if (response.id !== undefined) {
        getAllTasks();
        setDescription("");
        setIsDone(false);
      }
    }
  };

  const updateTaskState = async ({ done, id }) => {
    const response = await updateTask({ done: !done, id });
    if (response.id > 0) {
      getAllTasks();
    }
  };

  const getAllTasks = () => {
    getTasks().then((newTasks) => {
      return dispatch(setTasks(newTasks));
    });
  };

  const removeTask = async ({ id }) => {
    const response = await deleteTask({ id });
    if (response.ok) {
      getAllTasks();
    }
  };

  return (
    <main>
      <section>
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
      </section>

      {tasks.length > 0 && (
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
      )}
    </main>
  );
}

export default App;
