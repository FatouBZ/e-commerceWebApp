import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './customer/pages/login'
import Register from './customer/pages/Register'
import HomePage from './customer/pages/HomePage'
import ProductDetails from './customer/components/ProductsDetails'
import Dashboard from './store/pages/dashboard'
import AddProduct from './store/components/addProduct-form'
import Profile from './customer/components/Profile'
import ProfileInformation from './customer/pages/ProfileInformation'
import MyModal from './customer/components/modal'
import ProductsDetails from './customer/components/ProductsDetails'
import Products from './customer/components/Products'
import Orders from './customer/components/Orders'
import Coupons from './customer/components/Coupons'
import AddressBook from './customer/components/addressBook'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="product-detail" element={<ProductsDetails />} />
          <Route path="" element={<Products />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="add-product" element={<AddProduct />} />
          <Route path="store-orders" element={<OrdersTable />} /> */}

        <Route path="/profileInformation/" element={<ProfileInformation />}>
          <Route path="account" element={<Profile />}></Route>
          <Route path="order" element={<Orders />}></Route>
          <Route path="coupon" element={<Coupons />}></Route>
          <Route path="address" element={<AddressBook />}></Route>
        </Route>
        <Route path="/modal" element={<MyModal />}></Route>
        <Route path="/addProd" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
