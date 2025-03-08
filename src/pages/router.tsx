import { BrowserRouter, Route, Routes } from 'react-router'
import CalendarPage from './main'

const PagesRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRouter