import './App.scss'
import { Menu } from './compontens'
import { Routes, Route } from 'react-router-dom'
import { RatingPage, CarrouselPage, HomePage } from './pages'
const LINKS = [
  {
    path: '/',
    name: 'home',
    element: <HomePage />
  },
  {
    path: '/rating',
    name: 'rating',
    element: <RatingPage />
  },
  {
    path: '/carrousel',
    name: 'carrousel',
    element: <CarrouselPage />
  }
]

function App () {
  return (
    <div className='app flex'>
      <Menu components={LINKS} />
      <div className='w-100 vh-100 flex bg-light-grey'>
        <Routes>
          {
            LINKS.map(LINK =>
              <Route key={LINK.name} path={LINK.path} element={LINK.element} />
            )
          }
        </Routes>
      </div>
    </div>
  )
}

export default App
