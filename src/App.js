import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./AuthenticationPage/login";
import Register from "./AuthenticationPage/Register";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/HomePageContent/ProductsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
