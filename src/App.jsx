import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { ListTasks } from "./components/ListTasks";
import { useRefreshTasks } from "./hooks/useRefreshTasks";

function App() {
  // Custom hooks
  const { refresTasks } = useRefreshTasks();

  // Redux
  const tasks = useSelector((state) => state.tasks.value);

  useEffect(() => {
    refresTasks();
  }, []);

  return (
    <main>
      <header>
        <h1>TODO</h1>
      </header>

      <Form />

      {tasks.length > 0 && <ListTasks />}
    </main>
  );
}

export default App;
