import { useRef } from 'react'
import './Menu.scss'

const Menu = () => {
  const menuRef = useRef()
  const iconRef = useRef()

  const handleExpandMenu = () => {
    menuRef.current.classList.toggle('menu-expanded')
    iconRef.current.classList.toggle('fa-angle-left')
  }

  return (
    <div className='flex flex-column bg-black text-white menu' ref={menuRef}>
      <button onClick={handleExpandMenu}>
        <i class='fa-solid fa-angle-right fs-32 text-white' ref={iconRef} />
      </button>
      <ul className='w-100'>
        <li>primero</li>
        <li>segundo</li>
        <li>tercero</li>
      </ul>
    </div>
  )
}

export default Menu
