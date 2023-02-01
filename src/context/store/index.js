import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../reducers/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
