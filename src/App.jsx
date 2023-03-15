import './App.scss'
import { Menu } from './compontens'
import { Routes, Route } from 'react-router-dom'
import { RatingPage } from './pages'
const LINKS = [
  {
    path: '/',
    name: 'home',
    element: <h1 className='flex flex-column w-100'>HomePage</h1>
  },
  {
    path: '/rating',
    name: 'rating',
    element: <RatingPage />
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
