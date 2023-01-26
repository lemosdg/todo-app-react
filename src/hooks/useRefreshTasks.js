import { getTasks } from "../services/getTasks";
import { useDispatch } from "react-redux";
import { setTasks } from "../features/tasks/tasksSlice";

export const useRefreshTasks = () => {
  const dispatch = useDispatch();

  const refresTasks = () => {
    getTasks().then((newTasks) => {
      return dispatch(setTasks(newTasks));
    });
  };

  return { refresTasks };
};
