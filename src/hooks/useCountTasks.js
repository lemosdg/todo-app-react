import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useCountTasks = () => {
  const [tasksLeft, setTasksLeft] = useState(0)
  const tasks = useSelector((state) => state.tasks.value)

  useEffect(() => {
    const recountTasks = () => {
      setTasksLeft(tasks.filter((task) => task.done === 0).length)
    }

    recountTasks()
  }, [tasks])

  return { tasksLeft }
}
