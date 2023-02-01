import { useEffect } from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ListTasks } from "./components/ListTasks";

import { useRefreshTasks } from "./hooks/useRefreshTasks";
import { useScheme } from "./hooks/useScheme";
import "./App.css";

function App() {
  // Custom hooks
  const { refresTasks } = useRefreshTasks();
  const { scheme } = useScheme();

  useEffect(() => {
    refresTasks();
  }, []);

  return (
    <main>
      <section className={`app_wrapper ${scheme}`}>
        <Header />

        <Form />
      </section>

      <ListTasks />
    </main>
  );
}

export default App;
