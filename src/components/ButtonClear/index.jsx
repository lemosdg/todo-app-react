import { useCleaner } from '../../hooks/useCleaner'
import { useScheme } from '../../hooks/useScheme'
import './index.css'

export const ButtonClear = () => {
  // Custom hooks
  const { isCleaning, clearTasks } = useCleaner()
  const { scheme } = useScheme()

  return (
    <button
      onClick={clearTasks}
      className={
        isCleaning
          ? `buttonClear not_allowed ${scheme}`
          : `buttonClear ${scheme}`
      }
      disabled={isCleaning}
    >
      {isCleaning ? 'Cleaning' : 'Clear Completed'}
    </button>
  )
}
