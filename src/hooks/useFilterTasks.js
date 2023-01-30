import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/tasksSlice";
import { useState } from "react";
import { useRefreshTasks } from "./useRefreshTasks";
import { getTasks } from "../services/getTasks";

export const useFilterTasks = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  // global state
  const allTasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  // custom hooks
  const { refresTasks } = useRefreshTasks();

  const filterAll = () => {
    setAll(true);
    setActive(false);
    setCompleted(false);
    refresTasks();
  };

  const filterActive = () => {
    setActive(true);
    setAll(false);
    setCompleted(false);

    const filterByActive = 0;

    getTasks(filterByActive).then((tasks) => {
      return dispatch(setTasks(tasks));
    });
  };

  const filterCompleted = () => {
    setCompleted(true);
    setAll(false);
    setActive(false);

    const filterByCompleted = 1;

    getTasks(filterByCompleted).then((tasks) => {
      return dispatch(setTasks(tasks));
    });
  };

  return { all, active, completed, filterAll, filterActive, filterCompleted };
};
