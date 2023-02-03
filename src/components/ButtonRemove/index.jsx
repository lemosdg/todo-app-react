import iconCross from '../../assets/icon-cross.svg'
import './index.css'

export const ButtonRemove = ({ onClick }) => {
  return (
    <button className='buttonRemove' onClick={onClick}>
      <img
        className='buttonRemove_img'
        src={iconCross}
        alt='Delete this task'
      />
    </button>
  )
}
