import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, values) => {
      state.value = values.payload
    }
  }
})

export const { setTasks } = tasksSlice.actions

export default tasksSlice.reducer
