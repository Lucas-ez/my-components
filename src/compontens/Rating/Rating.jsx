const fullStar = 'fa-sharp fa-solid fa-star'
const halfStar = 'fa-sharp fa-solid fa-star-half-stroke'
const emptyStar = 'fa-sharp fa-regular fa-star'

const Rating = ({ rate }) => {
  const generate = n => {
    let i = 0
    const stars = []
    while (i < Math.floor(rate) && i < 5) {
      stars.push(fullStar)
      i++
    }
    if (rate - i >= 0.5 && i < 5) {
      stars.push(halfStar)
      i++
    }
    while (i < 5) {
      stars.push(emptyStar)
      i++
    }

    return stars.map((star, index) => <i key={index} className={star + ' text-gold fs-48'} />)
  }

  return (
    <div>
      {generate(rate)}
    </div>
  )
}

export default Rating
