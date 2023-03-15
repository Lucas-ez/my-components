import './Carrousel.scss'
import { useState } from 'react'

const Carrousel = ({ slides }) => {
  const [focusedItem, setFocusedItem] = useState(0)

  const handleSiguiente = () => {
    const newFocused = focusedItem + 1
    setFocusedItem(newFocused === slides.length ? 0 : newFocused)
  }

  const handleAnterior = () => {
    const newFocused = focusedItem - 1
    setFocusedItem(newFocused < 0 ? slides.length - 1 : newFocused)
  }

  return (
    <div className='flex carrousel'>
      <button onClick={handleAnterior}><i className='fa-solid fa-arrow-left' /></button>
      {
        slides.map((item, index) => (
          <div key={index} className={'slide' + (index === focusedItem ? ' active' : '')}>
            {
              index === focusedItem && item
            }
          </div>
        ))
      }
      <button onClick={handleSiguiente}><i className='fa-solid fa-arrow-right' /></button>
    </div>
  )
}

export default Carrousel
