import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = ({ components }) => {
  const menuRef = useRef()
  const iconRef = useRef()

  const handleExpandMenu = () => {
    menuRef.current.classList.toggle('menu-expanded')
    iconRef.current.classList.toggle('fa-angle-right')
  }

  return (
    <div className='vh-100 flex flex-column bg-black text-white menu menu-expanded' ref={menuRef}>
      <button onClick={handleExpandMenu}>
        <i className='fa-solid fa-angle-left fs-32 text-white' ref={iconRef} />
      </button>
      <ul className='w-100'>
        {
          components.map(element =>
            <Link to={element.path} key={element.name}>
              <li className='text-capitalize w-100'>
                {element.name}
              </li>
            </Link>
          )
        }
      </ul>
    </div>
  )
}

export default Menu
