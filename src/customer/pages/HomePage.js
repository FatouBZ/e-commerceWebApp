import React from 'react'
import MenuItem from '../components/MenuItem'
import Cart from '../components/Cart'
import Search from '../components/Search'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div className=" flex flex-row h-screen bg-[#247158]">
      <div className="flex flex-col items-center px-5 py-2 w-[5%] bg-[#247158]">
        <MenuItem />
      </div>
      <div className="flex flex-col h-screen bg-[#E5DAC4] rounded m-3 w-[75%] p-5 gap-4 max-h-[97%]">
        <Search />
        <Outlet />
        {/* <ProductsDetails /> */}
        {/* <Products /> */}
      </div>
      <div className="flex flex-col w-[20%] p-5 bg-[#247158] ">
        <Cart />
      </div>
    </div>
  )
}

export default HomePage
