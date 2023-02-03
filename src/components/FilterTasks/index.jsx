import { FilterTasksButton } from '../FilterTasksButton'

import { useFilterTasks } from '../../hooks/useFilterTasks'
import { useScheme } from '../../hooks/useScheme'
import './index.css'

export const FilterTasks = () => {
  // Custom hooks
  const { all, active, completed, filterAll, filterActive, filterCompleted } =
    useFilterTasks()
  const { scheme } = useScheme()

  return (
    <section className={`filter_tasks ${scheme}`}>
      <div className={`filter_tasks_wrapper ${scheme}`}>
        <FilterTasksButton status={all} displayText='All' onClick={filterAll} />
        <FilterTasksButton
          status={active}
          displayText='Active'
          onClick={filterActive}
        />
        <FilterTasksButton
          status={completed}
          displayText='Completed'
          onClick={filterCompleted}
        />
      </div>
    </section>
  )
}
