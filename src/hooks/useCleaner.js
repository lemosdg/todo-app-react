import { useState } from 'react'
import { useSelector } from 'react-redux'

import { deleteTask } from '../services/deleteTask'
import { useRefreshTasks } from './useRefreshTasks'

export const useCleaner = () => {
  const [isCleaning, setIsCleaning] = useState(false)

  // Custom hook
  const { refresTasks } = useRefreshTasks()

  // Global state
  const allTasks = useSelector((state) => state.tasks.value)

  const clearTasks = async () => {
    const tasksCompleted = allTasks.filter((task) => task.done === true)

    setIsCleaning(true)

    for (const task of tasksCompleted) {
      await deleteTask({ id: task.id })
    }

    setIsCleaning(false)
    refresTasks()
  }

  return { isCleaning, clearTasks }
}
