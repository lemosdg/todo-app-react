import { FilterTasksButton } from "../FilterTasksButton";
import { useFilterTasks } from "../../hooks/useFilterTasks";
import "./index.css";

export const FilterTasks = () => {
  const { all, active, completed, filterAll, filterActive, filterCompleted } =
    useFilterTasks();

  return (
    <section className="filter_tasks">
      <div className="filter_tasks_wrapper">
        <FilterTasksButton status={all} displayText="All" onClick={filterAll} />
        <FilterTasksButton
          status={active}
          displayText="Active"
          onClick={filterActive}
        />
        <FilterTasksButton
          status={completed}
          displayText="Completed"
          onClick={filterCompleted}
        />
      </div>
    </section>
  );
};
