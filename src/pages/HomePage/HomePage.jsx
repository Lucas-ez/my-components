import img from './img.svg'

const HomePage = () => {
  return (
    <div className='w-100 flex flex-column'>
      <img src={img} alt='svg' style={{ width: '500px' }} />
    </div>
  )
}

export default HomePage
