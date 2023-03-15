import './RatingPage.scss'
import { useState } from 'react'
import { Rating } from './../../compontens'

const RatingPage = () => {
  const [input, setInput] = useState(3.5)

  const handleInputChange = (e) => {
    const newValue = e.target.value

    if (newValue > 5) return setInput(5)
    if (newValue < 0) return setInput(0)

    setInput(e.target.value)
  }

  return (
    <div className='w-100 flex flex-column rating-page'>
      <input
        type='text'
        value={input}
        onChange={handleInputChange}
        className='text-center fs-32'
      />
      <Rating rate={input} />
    </div>
  )
}

export default RatingPage
