import React from "react";
import Dashboardside from "./dashboard-components/dashboardSide";
import OrdersTable from "./orders";
import AddProduct from "./products/addProduct-form";
import { Route, Routes } from "react-router-dom";
function Dashboard() {
  return (
    <div className=" flex flex-row h-screen bg-[#247158]">
      <div className="flex flex-col items-center px-5 py-2 w-[20%] bg-[#247158]">
        <Dashboardside />
      </div>
      <div className="flex flex-col h-screen bg-[#ffffff] rounded m-3 w-[80%] p-5 gap-4 max-h-[97%] overflow-scroll">
        <Routes>
          <Route path="/" element={<OrdersTable />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="store-orders" element={<OrdersTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
