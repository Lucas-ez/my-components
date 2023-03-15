import { img1, img2, img3, img4 } from './img'
import { Carrousel } from './../../compontens'

const slides = [
  <img src={img1} alt={'img' + 1} key={'img' + 1} />,
  <img src={img2} alt={'img' + 2} key={'img' + 2} />,
  <img src={img3} alt={'img' + 3} key={'img' + 3} />,
  <img src={img4} alt={'img' + 4} key={'img' + 4} />
]

const CarrouselPage = () => {
  return (
    <div className='w-100 flex flex-column'>
      <Carrousel slides={slides} />
    </div>
  )
}

export default CarrouselPage
