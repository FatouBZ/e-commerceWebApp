import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './AuthenticationPage/login'
import Register from './AuthenticationPage/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
