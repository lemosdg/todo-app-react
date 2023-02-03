import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from '../reducers/tasks/tasksSlice'
import schemeReducer from '../reducers/scheme/schemeSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    scheme: schemeReducer
  }
})
