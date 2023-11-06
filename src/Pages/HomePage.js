import React from "react";
import MenuItem from "./HomePageContent/MenuItem";
import Cart from "./HomePageContent/Cart";
import Search from "../components/Search";
import Products from "./HomePageContent/Products";

function HomePage() {
  return (
    <div className=" flex flex-row h-screen bg-[#E5DAC4]">
      <div className="flex flex-col items-center px-5 py-2 w-[5%] bg-[#247158]">
        <MenuItem />
      </div>
      <div className="flex flex-col h-screen overflow-scroll  w-[75%] p-5 gap-4">
        <Search />
        <Products />
      </div>
      <div className="flex flex-col w-[20%] p-5 bg-[#247158] ">
        <Cart />
      </div>
    </div>
  );
}

export default HomePage;
