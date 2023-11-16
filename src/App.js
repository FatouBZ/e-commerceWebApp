import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./customer/pages/login";
import Register from "./customer/pages/Register";
import HomePage from "./customer/pages/HomePage";
import ProductDetails from "./customer/components/ProductsDetails";
import Dashboard from "./store/pages/dashboard";
import AddProduct from "./store/components/addProduct-form";
import OrdersTable from "./store/components/orders";
import Profile from "./customer/components/Profile";
import ProfileInformation from "./customer/pages/ProfileInformation";
import MyModal from "./customer/components/modal";

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
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/MyAccount" element={<Profile />}></Route>
        <Route
          path="/profileInformation"
          element={<ProfileInformation />}
        ></Route>
        <Route path="/modal" element={<MyModal />}></Route>
        <Route path="/addProd" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
