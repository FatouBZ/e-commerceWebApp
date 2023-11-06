import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './AuthenticationPage/login'
import Register from './AuthenticationPage/Register'
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/HomePageContent/ProductsDetails'
import Dashboard from './Pages/HomePageContent/Store/dashboard'
import AddProduct from './Pages/HomePageContent/Store/products/addProduct-form'
import OrdersTable from './Pages/HomePageContent/Store/orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="store-orders" element={<OrdersTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
