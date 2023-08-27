import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import FormPage from './views/FormPage/FormPage'
import DetailPage from './views/DetailPage/DetailPage'
import LandingPage from './views/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/create' element={<FormPage />} />
        <Route path='/detail/:ids' element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
