import { useCountTasks } from '../../hooks/useCountTasks'
import { ButtonClear } from '../ButtonClear'
import './index.css'

export const FooterTasks = () => {
  const { tasksLeft } = useCountTasks()

  return (
    <footer className='footer_tasks'>
      <section className='footer_tasks_wrapper'>
        <span className='footer_tasks_items'>{tasksLeft} items left</span>

        <ButtonClear />
      </section>
    </footer>
  )
}
