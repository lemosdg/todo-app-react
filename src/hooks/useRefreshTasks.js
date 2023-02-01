import { useDispatch } from "react-redux";

import { getTasks } from "../services/getTasks";
import { setTasks } from "../context/reducers/tasks/tasksSlice";

export const useRefreshTasks = () => {
  const dispatch = useDispatch();

  const refresTasks = () => {
    getTasks().then((newTasks) => {
      return dispatch(setTasks(newTasks));
    });
  };

  return { refresTasks };
};
