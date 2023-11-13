import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './AuthenticationPage/login'
import Register from './AuthenticationPage/Register'
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/HomePageContent/ProductsDetails'
import Profile from './components/Profile'
import ProfileInformation from './components/ProfileInformation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/MyAccount" element={<Profile />}></Route>
        <Route
          path="/profileInformation"
          element={<ProfileInformation />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
