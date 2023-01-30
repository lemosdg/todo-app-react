import { useCountTasks } from "../../hooks/useCountTasks";
import "./index.css";

export const FooterTasks = () => {
  const { tasksLeft } = useCountTasks();

  return (
    <footer className="footer_tasks">
      <section className="footer_tasks_wrapper">
        <span className="footer_tasks_items">{tasksLeft} items left</span>
        <button className="footer_tasks_button">Clear Completed</button>
      </section>
    </footer>
  );
};
