import { BrowserRouter, Route, Routes } from 'react-router'
import MainPage from './main'

const PagesRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRouter