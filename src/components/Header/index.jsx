import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'
import { DARK_SCHEME, useScheme } from '../../hooks/useScheme'
import './index.css'

export const Header = () => {
  const { scheme, changeScheme } = useScheme()

  return (
    <header className='header'>
      <h1 className='header_title'>T O D O</h1>
      <button onClick={changeScheme} className='header_button'>
        <img
          className='header_img'
          src={scheme === DARK_SCHEME ? iconSun : iconMoon}
          alt='Icon of Moon'
        />
      </button>
    </header>
  )
}
